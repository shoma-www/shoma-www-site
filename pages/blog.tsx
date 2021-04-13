import React, { ComponentType, useCallback } from "react";
import { MetaData } from "~/types.ts";
import { formatDate } from "~/lib/utils.ts";
import { redirect } from "framework";

export default function Blog(
  // deno-lint-ignore no-explicit-any
  { Page }: { Page: ComponentType<any> & { meta?: MetaData } },
) {
  const to = "/blog";
  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      redirect(to, false);
    },
    [to, false],
  );
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
        <a href={to} onClick={onClick}>
          <h1 id="top" className="text-3xl font-semibold">
            <div>Shoma's Home Blog</div>
          </h1>
        </a>
      </header>
      {content}
    </div>
  );
}
