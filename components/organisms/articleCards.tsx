import React from "react";
import Articles from "~/articleData.ts";
import ArticleCard from "~/components/molecules/articleCard.tsx";

export default function ArticleCards() {
  const newArticleList = [];
  for (const [index, article] of Articles.entries()) {
    if (index > 2) {
      break;
    }
    const { id, date, title, url } = article.metaData;
    newArticleList.push(
      <ArticleCard
        id={id}
        url={url}
        date={date}
        title={title}
        html={article.html}
        className="mb-2"
      />,
    );
  }

  return (
    <div>
      {newArticleList}
    </div>
  );
}
