import { defineConfig } from 'astro/config';
import compressor from "astro-compressor";

import htmlMinifier from "astro-html-minifier";

// https://astro.build/config
export default defineConfig({
  integrations: [compressor(), htmlMinifier()],
	site: "https://whoami.red",
});
