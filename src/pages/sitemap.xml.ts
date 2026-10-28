import type { APIRoute } from "astro";
import { site } from "../data/site";
import { specialities } from "../data/specialities";

// Generated at build time, so new speciality pages are always included.
const pages = [
  { path: "/", priority: "1.0" },
  { path: "/services", priority: "0.9" },
  { path: "/doctors", priority: "0.9" },
  { path: "/contact", priority: "0.9" },
  { path: "/about", priority: "0.8" },
  { path: "/facilities", priority: "0.7" },
  ...specialities.map((s) => ({ path: `/services/${s.id}`, priority: "0.8" })),
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${site.url}${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
