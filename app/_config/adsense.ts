// Public AdSense unit IDs created for ReciboNaHora on 2026-11-10.
// Environment overrides remain available for future unit replacements.
export const ADSENSE_SLOTS = {
  toolAfterContent: process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL_AFTER_CONTENT?.trim() || "7442646716",
  articleMiddle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_MIDDLE?.trim() || "7041311131",
  articleBottom: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_BOTTOM?.trim() || "7408142640",
} as const;
