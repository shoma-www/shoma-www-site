import React from "react";
import { formatDate } from "~/lib/utils.ts";
import Articles from "~/articleData.ts";
import Button from "~/components/atoms/button.tsx";

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
          <Button href={`/blog${url}`}>
            続きを読む
          </Button>
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
