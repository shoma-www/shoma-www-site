import type {
  LoaderPlugin,
  LoaderTransformOutput,
} from "https://deno.land/x/aleph@v0.3.0-alpha.25/types.ts";
import util from "https://deno.land/x/aleph@v0.3.0-alpha.25/shared/util.ts";

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
    transform: (
      { content }: { content: Uint8Array },
    ): LoaderTransformOutput => {
      return {
        type: "tsx",
        code: `
        import React from "react";
        export default function All() {
          return (
            <div>
              <h2>記事一覧ページだよ（from ローダー）</h2>
              <ul>
                <li>
                  <a href="./hoge">hoge</a>
                </li>
                <li>
                  <a href="../">back home</a>
                </li>
              </ul>
            </div>
          );
        }`,
      };
    },
  };
};
