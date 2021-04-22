import { Article, isArticleConfig, isMetadata } from "../types.ts";
import { BASE_URL } from "../constant.ts";
import marked from "https://esm.sh/marked@2.0.1";
import { safeLoadFront } from "https://esm.sh/yaml-front-matter@4.1.1";
import compareDesc from "https://deno.land/x/date_fns@v2.15.0/compareDesc/index.js";
import format from "https://deno.land/x/date_fns@v2.15.0/format/index.js";
import en from "https://deno.land/x/date_fns@v2.15.0/locale/en-US/index.js";
import { escapeHtml } from "https://deno.land/x/escape_html/mod.ts";

const configFile = "scripts/articleConfig.json";

export async function getFilePaths(
  currentPath: string,
  filterFileName: RegExp,
): Promise<string[]> {
  let paths: string[] = [];

  for await (const dirEntry of Deno.readDir(currentPath)) {
    const entryPath = `${currentPath}/${dirEntry.name}`;
    if (dirEntry.isDirectory) {
      paths = paths.concat(await getFilePaths(entryPath, filterFileName));
      continue;
    }
    if (dirEntry.isFile && filterFileName.test(entryPath)) {
      paths.push(entryPath);
      continue;
    }
  }

  return paths;
}

const decoder = new TextDecoder();
const encoder = new TextEncoder();
const reg = new RegExp("(.*)(<!-- more -->){1}", "s");

const content = await Deno.readFile(configFile);
const obj = JSON.parse(decoder.decode(content));
if (!isArticleConfig(obj)) {
  throw new Error("No required value in articles.json.");
}

const articles: Article[] = [];
for (
  const path of await getFilePaths(obj.articleDir, new RegExp(".*\.md"))
) {
  const byteData = await Deno.readFile(path);
  const { __content, ...meta } = safeLoadFront(decoder.decode(byteData));
  if (!isMetadata(meta)) {
    console.log("Not match metadata. Please check this page. ", path);
    continue;
  }
  if (!reg.test(__content)) {
    console.log("Not match data. Please check this page. ", path);
    continue;
  }

  const html = marked.parse(RegExp.$1, { breaks: true, xhtml: true });
  articles.push({
    html,
    metaData: meta,
  });
  meta.dateStr = format(
    new Date(meta.date.toString()),
    "yyyy/MM/dd",
    {},
  );
  meta.description = html;
}

const sortedArticles = articles.sort((a, b) => {
  return compareDesc(a.metaData.date, b.metaData.date);
});
const fileContent = `const Articles = ${JSON.stringify(sortedArticles)};
export default Articles;`;
Deno.writeFile("articleData.ts", encoder.encode(fileContent));

// rss用のrssファイルも作る
const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0" xml:lang="ja">
  <channel>
    <title>Shoma's Home Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>技術のこととか思ったこととかつらつら</description>
    <atom:link rel="self" href="https://shoma-www.dev/rss/article.rss" type="application/rss+xml"/>
    <atom:link rel="hub" href="http://pubsubhubbub.appspot.com/"/>
    <language>ja</language>
${
  sortedArticles.map((article) =>
    `<item>
      <title>${article.metaData.title} - Shoma's Home Blog</title>
      <link>${BASE_URL}/blog${article.metaData.url}</link>
      <description>${
      escapeHtml(article.metaData.description || "")
    }</description>
      <guid isPermaLink="true">${BASE_URL}/blog${article.metaData.url}</guid>
      <pubDate>${
      format(
        article.metaData.date,
        "EEE, dd MMM yyyy HH:mm:ss xxxx",
        {
          locale: en,
        },
      )
    } </pubDate>
    </item>`
  )
}
  </channel>
</rss>`;

await Deno.mkdir("./public/rss", { recursive: true });
await Deno.writeFile("./public/rss/article.rss", encoder.encode(rss));
