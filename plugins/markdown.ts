import type { LoaderPlugin } from "https://deno.land/x/aleph@v0.3.0-alpha.29/types.ts";
import marked from "https://esm.sh/marked@2.0.1";
import { safeLoadFront } from "https://esm.sh/yaml-front-matter@4.1.1";
import util from "https://deno.land/x/aleph@v0.3.0-alpha.29/shared/util.ts";
import { MetaData } from "../types.ts";

const decoder = new TextDecoder();

export default (): LoaderPlugin => {
  return {
    name: "markdown-loader",
    type: "loader",
    test: /\.(md|markdown)$/i,
    allowPage: true,
    pagePathResolve: (url) => {
      let path = util.trimPrefix(
        url.replace(/\.(md|markdown)$/i, ""),
        "/pages",
      );
      const isIndex = path.endsWith("/index");
      if (isIndex) {
        path = util.trimSuffix(path, "/index");
        if (path === "") {
          path = "/";
        }
      }
      return { path, isIndex };
    },
    transform: ({ content }) => {
      const { __content, ...meta } = safeLoadFront(decoder.decode(content));
      const html = marked.parse(__content, { breaks: true, xhtml: true });
      const framework = Deno.env.get("ALEPH_FRAMEWORK");
      const props = {
        id: util.isString(meta.id) ? meta.id : undefined,
        className: util.isString(meta.id) ? meta.className : undefined,
        style: util.isPlainObject(meta.style) ? meta.style : undefined,
      };
      const metaData: MetaData = {
        title: meta.title || "",
        url: meta.url || "",
        date: meta.date || new Date(),
        id: meta.id || "",
        description: __content.substr(0, 120)
          .replaceAll("\n", "")
          .replaceAll("\r", ""),
      };

      if (framework === "react") {
        return {
          code: [
            `import { createElement } from 'https://esm.sh/react'`,
            `import HtmlPage from 'https://deno.land/x/aleph@v0.3.0-alpha.29/framework/react/components/HtmlPage.ts'`,
            `export default function MarkdownPage(props) {`,
            `  return createElement(HtmlPage, {`,
            `    ...${JSON.stringify(props)},`,
            `    ...props,`,
            `    html: ${JSON.stringify(html)}`,
            `  })`,
            `}`,
            `MarkdownPage.meta = ${JSON.stringify(metaData)}`,
          ].join("\n"),
        };
      }

      throw new Error(
        `markdown-loader: don't support framework '${framework}'`,
      );
    },
  };
};
