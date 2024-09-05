import { defineConfig } from "astro/config";

import alpinejs from "@astrojs/alpinejs";
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs(),
    partytown(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],

  output: "hybrid",
  adapter: vercel(),
});
