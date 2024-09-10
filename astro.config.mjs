import { defineConfig } from "astro/config";

import alpinejs from "@astrojs/alpinejs";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.buyastro.website",
  integrations: [alpinejs(), tailwind({ applyBaseStyles: false }), sitemap()],
  output: "hybrid",
  adapter: vercel(),
});
