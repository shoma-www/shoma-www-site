import React, { useContext } from "react";
import { ArticlesContext } from "~/stores/index.ts";
import { formatDate } from "~/lib/utils.ts";

export default function ArticleList() {
  const ctx = useContext(ArticlesContext);
  const articles = ctx.articles;
  if (!articles) {
    return;
  }
  const list = [];
  for (const article of articles) {
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
