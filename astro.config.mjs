// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// SITE_URL bisa diisi saat build lokal atau saat memakai domain sendiri.
// Di Vercel, alamat produksi tersedia otomatis lewat VERCEL_PROJECT_PRODUCTION_URL.
const productionUrl =
  process.env.SITE_URL?.trim() || process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = productionUrl
  ? productionUrl.startsWith("http")
    ? productionUrl
    : `https://${productionUrl}`
  : undefined;

export default defineConfig({
  site,
  integrations: [react(), ...(site ? [sitemap()] : [])],
  vite: {
    plugins: [tailwindcss()],
  },
});
