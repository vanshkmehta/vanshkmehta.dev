import { curriculumTotals } from "./seasons";

const totals = curriculumTotals();

export const SITE = {
  name: "Vansh Mehta",
  shortName: "vanshkmehta",
  markName: "VANSH MEHTA",
  title: "Vansh Mehta | Backend Engineer at Jio & Computer Science Educator",
  tagline: "Backend Engineer at Jio. Computer Science Educator.",
  description: `Learn Computer Science through a practical, fundamentals-first course: ${totals.seasons} seasons, ${totals.topics} topics, and ${totals.episodes} episodes, from memory and low-level programming through systems, networks, and architecture to machine learning.`,
  url: "https://vanshkmehta.dev",
  locale: "en_IN",
  email: "vanshitkalpeshmehta4@gmail.com",
  location: "Mumbai, India",
  role: "Backend Engineer",
  educatorRole: "Computer Science Educator",
  employer: "Jio Platforms",
  youtube: "https://www.youtube.com/@vanshkmehta",
  linkedin: "https://www.linkedin.com/in/vanshkmehta/",
  github: "https://github.com/vanshkmehta",
  repo: "https://github.com/vanshkmehta/vanshkmehta.dev",
  rss: "/rss.xml",
} as const;

export const PATHS = {
  home: "/",
  course: "/course",
  notes: "/notes",
  build: "/build",
  about: "/about",
} as const;

export const NAV = [
  { href: PATHS.home, label: "Home" },
  { href: PATHS.course, label: "Class" },
  { href: PATHS.notes, label: "Notes" },
  { href: PATHS.build, label: "Build" },
  { href: PATHS.about, label: "About" },
] as const;
