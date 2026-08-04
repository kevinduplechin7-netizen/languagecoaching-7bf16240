/**
 * Public Substack configuration.
 *
 * 1. VITE_SUBSTACK_PUBLICATION_URL may override the public publication URL.
 * 2. When available, paste the official external-site signup iframe code between
 *    the backticks below. This is public embed markup, never a secret.
 *
 * The app validates and extracts only the iframe's HTTPS Substack URL. It never
 * injects this string as HTML.
 */
const DEFAULT_SUBSTACK_PUBLICATION_URL = "https://languagelearningnotes.substack.com";

export const SUBSTACK_PUBLICATION_URL = (
  import.meta.env.VITE_SUBSTACK_PUBLICATION_URL ?? DEFAULT_SUBSTACK_PUBLICATION_URL
).trim();

export const SUBSTACK_SUBSCRIBE_URL = `${SUBSTACK_PUBLICATION_URL.replace(/\/$/, "")}/subscribe`;

export const SUBSTACK_SIGNUP_EMBED_CODE = ``;

const allowedSubstackHost = (hostname: string) =>
  hostname === "substack.com" || hostname.endsWith(".substack.com");

export function getSubstackEmbedUrl(): string | null {
  const code = SUBSTACK_SIGNUP_EMBED_CODE.trim();
  if (!code || typeof window === "undefined") return null;

  const document = new DOMParser().parseFromString(code, "text/html");
  const src = document.querySelector("iframe")?.getAttribute("src");
  if (!src) return null;

  try {
    const url = new URL(src);
    return url.protocol === "https:" && allowedSubstackHost(url.hostname) ? url.toString() : null;
  } catch {
    return null;
  }
}

export function hasSubstackConfiguration(): boolean {
  if (!SUBSTACK_PUBLICATION_URL) return false;
  try {
    const publication = new URL(SUBSTACK_PUBLICATION_URL);
    return publication.protocol === "https:" && allowedSubstackHost(publication.hostname);
  } catch {
    return false;
  }
}