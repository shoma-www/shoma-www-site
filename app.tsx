import React, { ComponentType } from "react";
import "tailwind";
import "./style/index.css";

export default function App(
  // deno-lint-ignore no-explicit-any
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />

        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Shoma's Home" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@w0GumZcZGwOHfBB" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <Page {...pageProps} />
    </main>
  );
}
