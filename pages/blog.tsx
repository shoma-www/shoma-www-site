import React, { ComponentType } from "react";
import { MetaData } from "~/types.ts";
import { formatDate } from "~/lib/utils.ts";
import { BASE_URL } from "~/constant.ts";
import Button from "~/components/atoms/button.tsx";

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
    const { id, title } = Page.meta;
    const date = formatDate(Page.meta.date.toString());
    mUrl = `${BASE_URL}/blog${Page.meta.url}`;
    mTitle = `${title} - Shoma's Home Blog`;
    mDesctiption = `${date} - ${Page.meta.description || ""}`;

    content = (
      <div className="blogentry px-8 pb-32">
        <div className="date mb-2">
          {date}
        </div>
        <h2 id={id} className="entry-title text-3xl mb-8">{title}</h2>
        <article className="entry-content mb-16">
          <Page />
        </article>
        <Button href="/blog">
          一覧に戻る
        </Button>
      </div>
    );
  }
  return (
    <>
      <head>
        <title>{mTitle}</title>
        <meta name="description" content={mDesctiption} />
        <meta property="og:url" content={mUrl} />
        <meta property="og:site_name" content="Shoma's Home Blog" />
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
      <div className="min-h-screen relative">
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
        <a
          className="rounded-full fixed z-10 right-10 bottom-20 bg-white border-2 flex items-center justify-center"
          href="#top"
        >
          <span className="material-icons md-50">
            expand_less
          </span>
        </a>
        <div className="max-w-3xl mx-auto">
          {content}
        </div>
        <footer
          className="w-full text-center bg-gray-50 py-1 absolute bottom-0"
        >
          ©2021 shoma-www
        </footer>
      </div>
    </>
  );
}
