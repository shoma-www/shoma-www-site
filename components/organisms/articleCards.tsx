import React from "react";
import Articles from "~/articleData.ts";
import ArticleCard from "~/components/molecules/articleCard.tsx";

export default function ArticleCards() {
  const newArticleList = [];
  for (const [index, article] of Articles.entries()) {
    if (index > 2) {
      break;
    }
    const { id, title, url, dateStr } = article.metaData;
    newArticleList.push(
      <ArticleCard
        id={id}
        url={url}
        date={dateStr}
        title={title}
        html={article.html}
        className="mb-8"
      />,
    );
  }

  return (
    <div>
      {newArticleList}
    </div>
  );
}
