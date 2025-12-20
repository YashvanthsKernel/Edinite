/**
 * SEOHead Component
 * 
 * Enhanced SEO management with:
 * - Dynamic meta tags per route
 * - JSON-LD structured data injection
 * - Canonical URLs
 * - Open Graph & Twitter cards
 */

import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { SEO_CONFIG, BASE_URL, ORGANIZATION_SCHEMA, type SEOConfig } from '@/lib/seoConfig';

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    noindex?: boolean;
    jsonLd?: object;
}

const DEFAULT_TITLE = 'Edinite - Digital Engineering & Simulation Services';
const DEFAULT_DESCRIPTION = 'Expert CAD design, FEA/CFD simulation, PCB design, and engineering training for students and startups in India.';

export default function SEOHead({
    title,
    description,
    keywords,
    canonical,
    ogImage,
    noindex = false,
    jsonLd,
}: SEOHeadProps) {
    const [location] = useLocation();

    useEffect(() => {
        // Get page-specific SEO data from config
        const pageSEO: SEOConfig = SEO_CONFIG[location] || SEO_CONFIG['/'];

        const finalTitle = title || pageSEO.title || DEFAULT_TITLE;
        const finalDescription = description || pageSEO.description || DEFAULT_DESCRIPTION;
        const finalKeywords = keywords || pageSEO.keywords || '';
        const finalCanonical = canonical || `${BASE_URL}${location === '/' ? '' : location}`;
        const finalJsonLd = jsonLd || pageSEO.jsonLd;

        // Update document title
        document.title = finalTitle;

        // Helper to update or create meta tag
        const setMetaTag = (name: string, content: string, isProperty = false) => {
            const attr = isProperty ? 'property' : 'name';
            let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;

            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute(attr, name);
                document.head.appendChild(tag);
            }
            tag.content = content;
        };

        // Update meta tags
        setMetaTag('description', finalDescription);
        if (finalKeywords) setMetaTag('keywords', finalKeywords);

        // Canonical URL
        let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonicalTag) {
            canonicalTag = document.createElement('link');
            canonicalTag.rel = 'canonical';
            document.head.appendChild(canonicalTag);
        }
        canonicalTag.href = finalCanonical;

        // Open Graph
        setMetaTag('og:title', finalTitle, true);
        setMetaTag('og:description', finalDescription, true);
        setMetaTag('og:url', finalCanonical, true);
        setMetaTag('og:type', 'website', true);
        setMetaTag('og:site_name', 'Edinite', true);
        if (ogImage) setMetaTag('og:image', ogImage, true);

        // Twitter
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:title', finalTitle);
        setMetaTag('twitter:description', finalDescription);

        // Robots
        if (noindex) {
            setMetaTag('robots', 'noindex, nofollow');
        } else {
            setMetaTag('robots', 'index, follow');
        }

        // JSON-LD Structured Data
        const jsonLdId = 'seo-json-ld';
        let jsonLdScript = document.getElementById(jsonLdId) as HTMLScriptElement;

        if (finalJsonLd) {
            if (!jsonLdScript) {
                jsonLdScript = document.createElement('script');
                jsonLdScript.id = jsonLdId;
                jsonLdScript.type = 'application/ld+json';
                document.head.appendChild(jsonLdScript);
            }
            jsonLdScript.textContent = JSON.stringify(finalJsonLd);
        } else if (jsonLdScript) {
            // If no JSON-LD for this page, inject organization schema as fallback
            jsonLdScript.textContent = JSON.stringify(ORGANIZATION_SCHEMA);
        }

        // Cleanup function to reset on unmount
        return () => {
            // Keep tags in place, they'll be updated on next route
        };

    }, [location, title, description, keywords, canonical, ogImage, noindex, jsonLd]);

    return null; // This component only manages head tags
}

// Export helper for components that need SEO data
export { SEO_CONFIG, getSEOConfig } from '@/lib/seoConfig';
