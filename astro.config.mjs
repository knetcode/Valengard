// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Valengard",
      tableOfContents: false,
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Pantheons",
          collapsed: true,
          items: [
            {
              label: "Overview: Pantheons",
              slug: "pantheons/overview",
            },
            {
              label: "White",
              collapsed: true,
              items: [
                { label: "Overview: White Pantheon", slug: "pantheons/white/overview" },
                { label: "Auriel", slug: "pantheons/white/auriel" },
                { label: "Lyra", slug: "pantheons/white/lyra" },
                { label: "Paximus", slug: "pantheons/white/paximus" },
                { label: "Seraphine", slug: "pantheons/white/seraphine" },
                { label: "Alethion", slug: "pantheons/white/alethion" },
              ],
            },
            {
              label: "Black",
              collapsed: true,
              items: [
                { label: "Overview: Black Pantheon", slug: "pantheons/black/overview" },
                { label: "Lorn", slug: "pantheons/black/lorn" },
                { label: "Xyrxos", slug: "pantheons/black/xyrxos" },
                { label: "Viscera", slug: "pantheons/black/viscera" },
                { label: "Nox", slug: "pantheons/black/nox" },
                { label: "Jyggalag", slug: "pantheons/black/jyggalag" },
              ],
            },
            {
              label: "Blue",
              collapsed: true,
              items: [
                { label: "Overview: Blue Pantheon", slug: "pantheons/blue/overview" },
                { label: "Veritas", slug: "pantheons/blue/veritas" },
                { label: "Chronos", slug: "pantheons/blue/chronos" },
                { label: "Aludra", slug: "pantheons/blue/aludra" },
                { label: "Alkahest", slug: "pantheons/blue/alkahest" },
                { label: "Rathos", slug: "pantheons/blue/rathos" },
              ],
            },
            {
              label: "Red",
              collapsed: true,
              items: [
                { label: "Overview: Red Pantheon", slug: "pantheons/red/overview" },
                { label: "Erosia", slug: "pantheons/red/erosia" },
                { label: "Ignis", slug: "pantheons/red/ignis" },
                { label: "Neria", slug: "pantheons/red/neria" },
                { label: "Midas", slug: "pantheons/red/midas" },
                { label: "Vydra", slug: "pantheons/red/vydra" },
              ],
            },
            {
              label: "Orange",
              collapsed: true,
              items: [
                { label: "Overview: Orange Pantheon", slug: "pantheons/orange/overview" },
                { label: "Aegon", slug: "pantheons/orange/aegon" },
                { label: "Volund", slug: "pantheons/orange/volund" },
                { label: "Kaldor", slug: "pantheons/orange/kaldor" },
                { label: "Automatos", slug: "pantheons/orange/automatos" },
                { label: "Argentum", slug: "pantheons/orange/argentum" },
              ],
            },
            {
              label: "Green",
              collapsed: true,
              items: [
                { label: "Overview: Green Pantheon", slug: "pantheons/green/overview" },
                { label: "Silvanus", slug: "pantheons/green/silvanus" },
                { label: "Ceres", slug: "pantheons/green/ceres" },
                { label: "Zinneroc", slug: "pantheons/green/zinneroc" },
                { label: "Kalista", slug: "pantheons/green/kalista" },
                { label: "Kyndra", slug: "pantheons/green/kyndra" },
              ],
            },
            {
              label: "Purple",
              collapsed: true,
              items: [
                { label: "Overview: Purple Pantheon", slug: "pantheons/purple/overview" },
                { label: "Parca", slug: "pantheons/purple/parca" },
                { label: "Somnus", slug: "pantheons/purple/somnus" },
                { label: "Alea", slug: "pantheons/purple/alea" },
                { label: "Ossivus", slug: "pantheons/purple/ossivus" },
                { label: "Nyxos", slug: "pantheons/purple/nyxos" },
              ],
            },
          ],
        },
        {
          label: "Planes of Existence",
          collapsed: true,
          items: [{ label: "Overview: Planes of Existence", slug: "planes/overview" }],
        },
        {
          label: "Factions",
          collapsed:true,
          autogenerate: {directory: "factions"}
        },
        {
          label: "Caldaeus",
          collapsed: true,
          items: [{ label: "Overview: Caldaeus", slug: "caldaeus/overview" }],
        },
        {
          label: "DM Guide",
          collapsed: true,
          slug: "dm-guide",
        },
        {
          label: "Player Guide",
          slug: "player-guide",
        },
      ],
    }),
  ],
});
