import { Article, isArticleConfig, isMetadata } from "../types.ts";
import { getFilePaths } from "../lib/utils.ts";
import marked from "https://esm.sh/marked@2.0.1";
import { safeLoadFront } from "https://esm.sh/yaml-front-matter@4.1.1";
import compareDesc from "https://deno.land/x/date_fns@v2.15.0/compareDesc/index.js";

const configFile = "scripts/articleConfig.json";

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
}

const sortedArticles = articles.sort((a, b) => {
  return compareDesc(a.metaData.date, b.metaData.date);
});
const fileContent = `const Articles = ${JSON.stringify(sortedArticles)};
export default Articles;`;
Deno.writeFile("articleData.ts", encoder.encode(fileContent));
