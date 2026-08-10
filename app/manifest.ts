import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WMS Scotland",
    short_name: "WMS",
    description: "WMS Scotland mobile job manager",
    start_url: "/today",
    display: "standalone",
    background_color: "#0b1220",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}