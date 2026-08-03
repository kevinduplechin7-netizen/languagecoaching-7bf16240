import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
}

/** Sets document title and meta description for a page. */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: "name" | "property", key: string) => {
      let tag = document.head.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      return tag;
    };

    setMeta('meta[name="description"]', "name", "description").setAttribute("content", description);
    setMeta('meta[property="og:title"]', "property", "og:title").setAttribute("content", title);
    setMeta('meta[property="og:description"]', "property", "og:description").setAttribute(
      "content",
      description,
    );

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + window.location.pathname;
  }, [title, description]);
}
