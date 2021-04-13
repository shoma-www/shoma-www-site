import React, { ComponentType } from "react";
import { MetaData } from "../types.ts";
import { formatDate } from "../lib/utils.ts";

export default function Blog(
  // deno-lint-ignore no-explicit-any
  { Page }: { Page: ComponentType<any> & { meta?: MetaData } },
) {
  let content = (<Page />);
  if (Page.meta) {
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
        <a href="/blog">
          <h1 id="top" className="text-3xl font-semibold">
            <div>Shoma's Home Blog</div>
          </h1>
        </a>
      </header>
      {content}
    </div>
  );
}
