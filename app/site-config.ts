const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = rawSiteUrl
  ? new URL(rawSiteUrl.endsWith("/") ? rawSiteUrl : `${rawSiteUrl}/`)
  : undefined;
