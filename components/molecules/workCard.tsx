import React, { PropsWithChildren } from "react";
import Card from "../atoms/card.tsx";

export default function WorkCard(
  { children, className, title, url, github, img }: PropsWithChildren<
    {
      className?: string;
      title: string;
      url?: string;
      github?: string;
      img?: string;
    }
  >,
) {
  const noImage = (
    <div className="text-center p-4 border-2 border-gray-50">
      <span className="material-icons md-100">
        no_photography
      </span>
    </div>
  );
  return (
    <Card className={`${className}`}>
      <div className="flex items-center">
        <span className="mr-2">{title}</span>
        {url && <a
          href={url}
          className="flex items-center mr-1"
        >
          <span className="material-icons">home</span>
        </a>}
        {github && <a href={github}>
          <img src="images/i-github.svg" />
        </a>}
      </div>
      {img ? <img src={img} /> : noImage}
      <div className="text-base">
        {children}
      </div>
    </Card>
  );
}
