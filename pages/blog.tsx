import React, { ComponentType } from "react";
import { MetaData } from "~/types.ts";
import { formatDate } from "~/lib/utils.ts";

export default function Blog(
  // deno-lint-ignore no-explicit-any
  { Page }: { Page: ComponentType<any> & { meta?: MetaData } },
) {
  let content = (<Page />);
  if (Page.meta !== undefined) {
    const { title, id, date } = Page.meta;
    content = (
      <div className="blogentry">
        <h2 id={id} className="entry-title">{title}</h2>
        <div className="date">
          {formatDate(date)}
        </div>
        <div className="entry-content">
          <Page />
        </div>
      </div>
    );
  }
  return (
    <div>
      <header
        id="top"
        className="w-full bg-gray-50 p-8 flex justify-start items-center mb-8"
      >
        <h1 id="top" className="text-3xl font-semibold">
          <a href="/blog/" rel="prefetch">
            <div>Shoma's Home Blog</div>
          </a>
        </h1>
      </header>
      {content}
    </div>
  );
}
