import React, { useContext } from "react";
import { ArticlesContext } from "../../stores/index.ts";
import { formatDate } from "../../lib/utils.ts";

export default function ArticleList() {
  const ctx = useContext(ArticlesContext);
  const articles = ctx.articles;
  if (!articles) {
    return;
  }
  const list = [];
  for (const article of articles) {
    list.push(
      <li key={article.metaData.id}>
        <div className="p-8">
          <span>{formatDate(article.metaData.date)}</span>
          <a href={`./${article.metaData.url}`}>{article.metaData.title}</a>
          <div dangerouslySetInnerHTML={{ __html: article.html }} />
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
          <a href="../">back home</a>
        </li>
      </ul>
    </div>
  );
}
