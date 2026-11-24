import { PROFILE } from "./profile";

export const SITE = {
  name: "Vansh Mehta",
  shortName: "vanshkmehta",
  markName: "VANSH MEHTA",
  title: "Vansh Mehta | Backend Engineer at Jio, Builder and Teacher",
  tagline: "Backend engineer at Jio. Builder. Teacher.",
  description: PROFILE.summary,
  url: "https://vanshkmehta.dev",
  locale: "en_IN",
  email: "vanshitkalpeshmehta4@gmail.com",
  location: "Mumbai, India",
  role: "Backend Engineer",
  employer: "Jio Platforms",
  youtube: "https://www.youtube.com/@vanshkmehta",
  linkedin: "https://www.linkedin.com/in/vanshkmehta/",
  x: "https://x.com/vanshkmehta",
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
  { href: PATHS.course, label: "Seasons" },
  { href: PATHS.notes, label: "Notes" },
  { href: PATHS.build, label: "Builds" },
  { href: PATHS.about, label: "About" },
] as const;
