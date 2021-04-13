import markdown from "https://deno.land/x/aleph@v0.3.0-alpha.28/plugins/markdown.ts";
import type { Config } from "https://deno.land/x/aleph@v0.3.0-alpha.28/types.ts";

export default (): Config => ({
  plugins: [
    markdown(),
  ],
});
