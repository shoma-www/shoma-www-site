import React, { ComponentType } from "react";
import { metaData } from "../types.ts";
import format from "date_fns/format";
import parseISO from "date_fns/parseISO";
import ja from "date_fns/locale/ja";

export default function Blog(
  // deno-lint-ignore no-explicit-any
  { Page }: { Page: ComponentType<any> & { meta: metaData } },
) {
  return (
    <div>
      <header
        id="top"
        className="w-full bg-gray-50 p-8 flex justify-start items-center"
      >
        <h1 id="top" className="text-3xl font-semibold">
          <div>Shoma's Home Blog</div>
        </h1>
      </header>
      {format(
        parseISO(Page.meta.date.toString(), { locale: ja }),
        "yyyy/MM/dd",
        {
          locale: ja,
        },
      )}
      <Page />
    </div>
  );
}
