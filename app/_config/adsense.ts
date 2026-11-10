export const ADSENSE_SLOTS = {
  toolAfterContent: process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL_AFTER_CONTENT?.trim() || "",
  articleMiddle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_MIDDLE?.trim() || "",
  articleBottom: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_BOTTOM?.trim() || "",
} as const;
