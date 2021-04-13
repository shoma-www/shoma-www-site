import type {
  LoaderPlugin,
  LoaderTransformOutput,
} from "https://deno.land/x/aleph@v0.3.0-alpha.25/types.ts";
import util from "https://deno.land/x/aleph@v0.3.0-alpha.25/shared/util.ts";
import { parse } from "https://deno.land/std/encoding/yaml.ts";
import { isLoaderConfig, isMetadata } from "../types.ts";
import { getFilePaths } from "../lib/utils.ts";

const decoder = new TextDecoder();

export default (): LoaderPlugin => {
  return {
    name: "blog-articles-loader",
    type: "loader",
    test: /articles\.(json)$/,
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

      const reg = new RegExp("^(-){3}(.*)(-){3}", "s");
      const list: string[] = [];
      for (
        const path of await getFilePaths(obj.articleDir, new RegExp(".*\.md"))
      ) {
        const byteData = await Deno.readFile(path);
        const article = decoder.decode(byteData);
        if (!reg.test(article.trimStart())) {
          continue;
        }

        const meta = parse(RegExp.$2);
        if (isMetadata(meta)) {
          list.push(`
            <li id="${meta.id}">
              <span>${meta.date}</span><a href="./${meta.url}">${meta.title}</a>
            </li>`);
        }
      }

      return {
        type: "tsx",
        code: `
        import React from "react";
        export default function All() {
          return (
            <div>
              <h2>記事一覧ページだよ（from ローダー）</h2>
              <ul>
                ${list.join("")}
              </ul>
              <a href="../">back home</a>
            </div>
          );
        }`,
      };
    },
  };
};
