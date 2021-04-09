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
      </head>
      <Page {...pageProps} />
    </main>
  );
}
