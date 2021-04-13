import type {
  LoaderPlugin,
  LoaderTransformOutput,
} from "https://deno.land/x/aleph@v0.3.0-alpha.25/types.ts";
import util from "https://deno.land/x/aleph@v0.3.0-alpha.25/shared/util.ts";
import { parse } from "https://deno.land/std/encoding/yaml.ts";

interface metaData {
  title: string;
  url: string;
  date: Date;
  id: string;
}

// deno-lint-ignore no-explicit-any
const isMetadata = (arg: any): arg is metaData => {
  return typeof arg.title === "string" &&
    typeof arg.url === "string" &&
    arg.date instanceof Date &&
    typeof arg.id === "string";
};

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
      const paths = await getFilePaths(obj.path);

      const reg = new RegExp("^(-){3}(.*)(-){3}", "s");
      const list: string[] = [];
      for (const path of paths) {
        const byteData = await Deno.readFile(path);
        const article = decoder.decode(byteData);
        if (reg.test(article.trimStart())) {
          const meta = parse(RegExp.$2);
          if (isMetadata(meta)) {
            list.push(`
              <li id="${meta.id}">
                <span>${meta.date.getFullYear()}/${meta.date.getMonth()}/${meta.date.getDate()}</span><a href="./${meta.url}">${meta.title}</a>
              </li>`);
          }
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

async function getFilePaths(currentPath: string): Promise<string[]> {
  let paths: string[] = [];

  for await (const dirEntry of Deno.readDir(currentPath)) {
    const entryPath = `${currentPath}/${dirEntry.name}`;

    if (dirEntry.isDirectory) {
      paths = paths.concat(await getFilePaths(entryPath));
      continue;
    }
    if (dirEntry.isFile && entryPath.endsWith(".md")) {
      paths.push(entryPath);
      continue;
    }
  }

  return paths;
}
