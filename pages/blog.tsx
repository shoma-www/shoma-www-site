import React, { ComponentType } from "react";
import { MetaData } from "~/types.ts";
import { formatDate } from "~/lib/utils.ts";
import { BASE_URL } from "~/constant.ts";

export default function Blog(
  // deno-lint-ignore no-explicit-any
  { Page }: { Page: ComponentType<any> & { meta?: MetaData } },
) {
  let mUrl = `${BASE_URL}/blog`;
  let mTitle = "Shoma's Home Blog";
  let mDesctiption = "shoma-wwwのブログ。IT技術関連や日々のこととか気が向いたら書く。";
  const mImage = `${BASE_URL}/images/og-image.png`;

  let content = (<Page />);
  if (Page.meta !== undefined) {
    const { title, id, date, url, description } = Page.meta;
    mUrl = `${BASE_URL}/blog${url}`;
    mTitle = `${title} - Shoma's Home Blog`;
    mDesctiption = description || "";

    content = (
      <div className="blogentry">
        <h2 id={id} className="entry-title">{title}</h2>
        <div className="date">
          {formatDate(date.toString())}
        </div>
        <div className="entry-content">
          <Page />
        </div>
      </div>
    );
  }
  return (
    <>
      <head>
        <title>{mTitle}</title>
        <meta name="description" content={mDesctiption} />
        <meta property="og:url" content={mUrl} />
        <meta property="og:title" content={mTitle} />
        <meta
          property="og:description"
          content={mDesctiption}
        />
        <meta
          property="og:image"
          content={mImage}
        />
      </head>
      <div>
        <header
          id="top"
          className="w-full bg-gray-50 p-8 flex justify-start items-center mb-8"
        >
          <h1 id="top" className="text-3xl font-semibold">
            <a href="/blog/" rel="prefetch">
              <div>Shoma's Home Blog</div>
            </a>
          </h1>
        </header>
        {content}
      </div>
    </>
  );
}
