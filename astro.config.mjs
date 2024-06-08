import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://screwfast.uk",
  image: {
    domains: ["images.unsplash.com"],
  },

  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {

      
      },
    }),
    starlight({
      title: "ScrewFast ideasthemes",
      // Set English as the default language for this site.
      defaultLocale: 'en',
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: 'English',
        },
        // Documentos en español en `src/content/docs/es/`
        'es': {
          label: 'Español',
          lang: 'es',
        },
        // Documentos en sueco en `src/content/docs/sv/`
        sv: {
          label: 'Svenska',
          lang: 'sv',
        },
      },
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: "Quick Start Guides",
          translations: {
            de: "Schnellstartanleitungen",
            es: "Guías de Inicio Rápido",
            sv: "Snabbstartguider",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Tools & Equipment",
          items: [
            { label: "Tool Guides", link: "tools/tool-guides/" },
            { label: "Equipment Care", link: "tools/equipment-care/" },
          ],
        },
        {
          label: "Construction Services",
          autogenerate: { directory: "construction" },
        },
        {
          label: "Advanced Topics",
          autogenerate: { directory: "advanced" },
        },
      ],
      social: {
        github: "https://github.com/mearashadowfax/ScrewFast",
      },
      disable404Route: true,
      customCss: ["./src/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://screwfast.uk" + "/social.webp",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://screwfast.uk" + "/social.webp",
          },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
  adapter: vercelStatic(),
});
