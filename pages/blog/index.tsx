import React from "react";
import { formatDate } from "~/lib/utils.ts";
import Articles from "~/articleData.ts";

export default function ArticleList() {
  const list = [];
  for (const article of Articles) {
    const { id, title, date, url } = article.metaData;
    list.push(
      <li key={id}>
        <div className="p-8">
          <a
            id={id}
            href={`/blog${url}`}
            rel="prefetch"
            className="hover:underline"
          >
            <div className="date text-base">
              {formatDate(date)}
            </div>
            <h3 className="title entry-title text-3xl mb-4">
              {title}
            </h3>
          </a>
          <article
            className="content entry-content text-base mb-8"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
          <div className="text-center">
            <a
              id={id}
              href={`/blog${url}`}
              rel="prefetch"
              className="py-2 px-8 rounded-full border-2 transform hover:bg-gray-50"
            >
              続きを読む
            </a>
          </div>
        </div>
      </li>,
    );
  }
  return (
    <div>
      <ul>
        {list}
      </ul>
      <a href="/" rel="prefetch">Go back Shoma's Home</a>
    </div>
  );
}
