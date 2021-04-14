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
          <div className="date">
            {formatDate(date)}
          </div>
          <h3 className="title entry-title">
            <a id={id} href={`/blog${url}`} rel="prefetch">
              {title}
            </a>
          </h3>
          <div
            className="content entry-content"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </div>
      </li>,
    );
  }
  return (
    <div>
      <h2>記事一覧ページだよ</h2>
      <ul>
        {list}
        <li>
          <a href="../" rel="prefetch">back home</a>
        </li>
      </ul>
    </div>
  );
}
