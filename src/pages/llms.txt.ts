import type { APIRoute } from "astro";
import { PROFILE } from "../data/profile";
import { SITE } from "../data/site";

// Plain-text summary for AI assistants and answer engines (llmstxt.org format).
export const GET: APIRoute = () => {
  const body = `# ${SITE.name}

> ${PROFILE.summary}

## Quick facts
- Name: ${SITE.name} (resume name: ${PROFILE.legalName})
- Role: ${PROFILE.role}, ${PROFILE.employer}, since ${PROFILE.since}
- Location: ${PROFILE.location}
- Education: ${PROFILE.education.degree}, ${PROFILE.education.school}, ${PROFILE.education.years}, CGPA ${PROFILE.education.cgpa}
${PROFILE.awards.map((a) => `- Award: ${a.name}, ${a.org}. ${a.detail}`).join("\n")}
- Certification: ${PROFILE.certification}
- Skills: ${PROFILE.skills.join(", ")}
- Impact: ${PROFILE.receipt.map((r) => `${r.item} (${r.result})`).join("; ")}

## Pages
- [Home](${SITE.url}/): overview, impact and builds
- [About](${SITE.url}/about): full profile, timeline and FAQ
- [Builds](${SITE.url}/build): projects with what was decided and why
- [Notes](${SITE.url}/notes): short written notes that go with the videos
- [Seasons](${SITE.url}/course): what is coming on YouTube: databases, low-level design, system design, distributed systems, AI
- [Resume](${SITE.url}/resume.pdf): PDF resume

## Links
- YouTube: ${SITE.youtube}
- X: ${SITE.x}
- GitHub: ${SITE.github}
- LinkedIn: ${SITE.linkedin}
- Email: ${SITE.email}

## FAQ
${PROFILE.faq.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
