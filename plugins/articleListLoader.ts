import type {
  LoaderPlugin,
  LoaderTransformOutput,
} from "https://deno.land/x/aleph@v0.3.0-alpha.28/types.ts";
import util from "https://deno.land/x/aleph@v0.3.0-alpha.28/shared/util.ts";
import { Article, isLoaderConfig, isMetadata } from "../types.ts";
import { getFilePaths } from "../lib/utils.ts";
import marked from "https://esm.sh/marked@2.0.1";
import { safeLoadFront } from "https://esm.sh/yaml-front-matter@4.1.1";

const decoder = new TextDecoder();

export default (): LoaderPlugin => {
  return {
    name: "blog-articles-loader",
    type: "loader",
    test: /articles\.json$/,
    allowPage: true,
    pagePathResolve: (url: string) => {
      const path = util.trimPrefix(
        url.replace(/(articles\.json)$/i, ""),
        "/pages",
      );

      return { path, isIndex: true };
    },
    transform: async (
      { content }: { content: Uint8Array },
    ): Promise<LoaderTransformOutput> => {
      const data = decoder.decode(content);
      const obj = JSON.parse(data);
      if (!isLoaderConfig(obj)) {
        throw new Error("No required value in articles.json.");
      }

      const reg = new RegExp("(.*)(<!-- more -->){1}", "s");
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
        return b.metaData.date.getUTCSeconds() -
          a.metaData.date.getUTCSeconds();
      });
      const fileContent = `const Articles = ${JSON.stringify(sortedArticles)};
export default Articles;`;
      const encoder = new TextEncoder();
      Deno.writeFile("articleData.ts", encoder.encode(fileContent));

      return {
        type: "tsx",
        code: `
        import React from "react";
        export default function Dummy() {
          return (
            <></>
          );
        }
        `,
      };
    },
  };
};
