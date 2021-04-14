import React from "react";
import { BASE_URL } from "~/constant.ts";
import { formatDate } from "~/lib/utils.ts";
import Articles from "~/articleData.ts";
import Button from "~/components/atoms/button.tsx";
import ShareButtons from "~/components/organisms/shareButtons.tsx";

export default function ArticleList() {
  const list = [];
  for (const article of Articles) {
    const { id, title, date, url } = article.metaData;
    list.push(
      <li key={id} className="my-8">
        <a
          id={id}
          href={`/blog${url}`}
          rel="prefetch"
          className="hover:underline"
        >
          <div className="date text-base mb-2">
            {formatDate(date)}
          </div>
          <h3 className="title entry-title text-3xl mb-2">
            {title}
          </h3>
        </a>
        <ShareButtons className="mb-8" url={`${BASE_URL}/blog${url}`} />
        <article
          className="content entry-content text-base mb-8"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
        <Button href={`/blog${url}`}>
          続きを読む
        </Button>
      </li>,
      <hr className="mt-16" />,
    );
  }
  if (list.length > 0) {
    list.pop();
  }
  return (
    <div className="pb-8">
      <ul className="px-8 mb-16">
        {list}
      </ul>
      <a href="/" rel="prefetch">Go back Shoma's Home</a>
    </div>
  );
}
