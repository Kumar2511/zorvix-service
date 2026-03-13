import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  jsonLd?: Record<string, unknown>;
}

const SEOHead = ({ title, description, jsonLd }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      const tag = document.createElement("meta");
      tag.name = "description";
      tag.content = description;
      document.head.appendChild(tag);
    }

    let scriptEl: HTMLScriptElement | null = null;
    if (jsonLd) {
      scriptEl = document.createElement("script");
      scriptEl.type = "application/ld+json";
      scriptEl.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(scriptEl);
    }

    return () => {
      if (scriptEl) {
        document.head.removeChild(scriptEl);
      }
    };
  }, [title, description, jsonLd]);

  return null;
};

export default SEOHead;
