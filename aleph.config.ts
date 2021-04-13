import markdown from "https://deno.land/x/aleph@v0.3.0-alpha.28/plugins/markdown.ts";
import type { Config } from "https://deno.land/x/aleph@v0.3.0-alpha.28/types.ts";
import articleListLoader from "./plugins/articleListLoader.ts";

export default (): Config => ({
  plugins: [
    markdown(),
    articleListLoader(),
  ],
});
