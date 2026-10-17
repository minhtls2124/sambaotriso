import { NAV, SITE } from "@/lib/site";

export default function sitemap() {
  const capNhat = new Date();
  return NAV.map((m) => ({
    url: `${SITE.url}${m.href === "/" ? "" : m.href}`,
    lastModified: capNhat,
    changeFrequency: m.href === "/" ? "weekly" : "monthly",
    priority: m.href === "/" ? 1 : 0.8,
  }));
}
