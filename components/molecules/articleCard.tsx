import React from "react";
import Card from "~/components/atoms/card.tsx";

export default function ArticleCard(
  { id, url, date, title, html, className }: {
    id: string;
    url: string;
    date: string;
    title: string;
    html: string;
    className?: string;
  },
) {
  return (
    <Card key={id} className={className}>
      <a href={`/blog${url}`} className="hover:underline">
        <div>
          <span className="mr-4">{date}</span>
          <span>{title}</span>
        </div>
        <article
          dangerouslySetInnerHTML={{ __html: html }}
          className="text-base p-4"
        >
        </article>
      </a>
    </Card>
  );
}
