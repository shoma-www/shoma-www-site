import React, { ComponentType } from "react";
import "tailwind";
import "./style/index.css";
import { ArticlesContext } from "./stores/index.ts";
import Articles from "./articleData.ts";

export default function App(
  // deno-lint-ignore no-explicit-any
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <ArticlesContext.Provider value={{ articles: Articles }}>
        <Page {...pageProps} />
      </ArticlesContext.Provider>
    </main>
  );
}
