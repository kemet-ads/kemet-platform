/**
 * SEO utility for dynamically setting page metadata on client-rendered pages.
 */

interface SEOParams {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  canonical?: string;
  jsonLd?: Record<string, unknown>;
}

const BASE_URL = 'https://kemetads.ae';
const DEFAULT_OG_IMAGE = '/kemet_logo.png';
const SITE_NAME = 'KEMET — Performance Lead Generation';

/**
 * Sets all meta tags for a given page. Call this in useEffect on client pages.
 */
export function setPageSEO(params: SEOParams) {
  const {
    title,
    description,
    ogTitle = title,
    ogDescription = description,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    canonical,
    jsonLd,
  } = params;

  // Document title
  document.title = `${title} | KEMET`;

  // Meta description
  setMetaTag('description', description);

  // Open Graph
  setMetaTag('og:title', ogTitle);
  setMetaTag('og:description', ogDescription);
  setMetaTag('og:image', ogImage);
  setMetaTag('og:type', ogType);
  setMetaTag('og:site_name', SITE_NAME);
  setMetaTag('og:url', canonical || BASE_URL);

  // Twitter
  setMetaTag('twitter:card', twitterCard);
  setMetaTag('twitter:title', ogTitle);
  setMetaTag('twitter:description', ogDescription);
  setMetaTag('twitter:image', ogImage);

  // Canonical
  setCanonical(canonical || BASE_URL);

  // JSON-LD
  if (jsonLd) {
    setJsonLd(jsonLd);
  }
}

function setMetaTag(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      el.setAttribute('property', name);
    } else {
      el.setAttribute('name', name);
    }
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

function setJsonLd(data: Record<string, unknown>) {
  const scriptId = 'json-ld-seo';
  let el = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = scriptId;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}