import markdown from "./plugins/markdown.ts";
import type { Config } from "https://deno.land/x/aleph@v0.3.0-alpha.31/types.ts";

export default (): Config => ({
  plugins: [
    markdown(),
  ],
  ssr: true, // ssrの状態だとcomponentsで関数を読み込むとcomponentとして扱われてしまってエラーになる
});
