import React, { ComponentType } from "react";
import { BASE_URL } from "./constant.ts";
import "tailwind";
import "./style/index.css";

export default function App(
  // deno-lint-ignore no-explicit-any
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  const GA_TRACKING_ID = "GTM-5X9CK2S";
  const gtmScript =
    `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GA_TRACKING_ID}');`;
  const gtmFrame =
    `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

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
        <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
        <link
          rel="alternate"
          href={`${BASE_URL}/rss/article.rss`}
          type="application/rss+xml"
          title="RSS"
        />
        <link
          rel="alternate"
          href={`${BASE_URL}/rss/article.rss`}
          type="application/atom+xml"
          title="RSS"
        />
      </head>
      <body>
        <noscript dangerouslySetInnerHTML={{ __html: gtmFrame }} />
        <Page {...pageProps} />
      </body>
    </main>
  );
}
