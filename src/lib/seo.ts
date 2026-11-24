import { PROFILE } from "../data/profile";
import { SITE } from "../data/site";

export const PERSON_ID = `${SITE.url}/#person`;
export const SITE_ID = `${SITE.url}/#website`;

export function personLd() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE.name,
    alternateName: [PROFILE.legalName, "Vansh K Mehta", "vanshkmehta"],
    url: SITE.url,
    image: `${SITE.url}/vansh.webp`,
    email: SITE.email,
    description: PROFILE.summary,
    jobTitle: PROFILE.role,
    worksFor: { "@type": "Organization", name: PROFILE.employer, url: "https://www.jio.com" },
    homeLocation: { "@type": "Place", name: PROFILE.location },
    address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
    alumniOf: { "@type": "CollegeOrUniversity", name: PROFILE.education.school },
    knowsAbout: [...PROFILE.skills, "Computer science education", "Backend engineering"],
    hasCredential: { "@type": "EducationalOccupationalCredential", name: PROFILE.certification },
    award: PROFILE.awards.map((a) => `${a.name}, ${a.org}`),
    sameAs: [SITE.youtube, SITE.x, SITE.github, SITE.linkedin],
  };
}

export function websiteLd() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: PROFILE.summary,
    inLanguage: "en-IN",
    publisher: { "@id": PERSON_ID },
  };
}

export function faqLd() {
  return {
    "@type": "FAQPage",
    mainEntity: PROFILE.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: new URL(t.path, SITE.url).href,
    })),
  };
}

export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });
