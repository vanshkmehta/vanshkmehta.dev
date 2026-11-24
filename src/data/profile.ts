/**
 * Single source of truth for facts about Vansh. Every claim here comes from his resume
 * (resume/VANSHIT_MEHTA_BIG_TECH.md) unless marked otherwise. Add a fact here once and the
 * home page, about page, JSON-LD, FAQ and llms.txt all pick it up. Do not add anything unverified.
 */
export const PROFILE = {
  legalName: "Vanshit Mehta",
  knownAs: "Vansh Mehta",
  role: "Software Development Engineer I",
  employer: "Jio Platforms Limited",
  since: "December 2023",
  location: "Mumbai, Maharashtra, India",
  education: {
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "Pune Vidhyarthi Griha's College of Engineering (PVGCOE), Nashik",
    years: "2019 to 2023",
    cgpa: "8.60",
  },
  skills: [
    "Java",
    "Spring Boot",
    "Distributed systems",
    "Event-driven architecture",
    "RabbitMQ",
    "PostgreSQL",
    "Oracle",
    "Redis",
    "Kubernetes",
    "Docker",
    "REST API design",
    "Cloud infrastructure",
  ],
  certification: "Certified Kubernetes Application Developer (Coursera)",
  awards: [
    {
      name: "Star Performer, Best Debutant",
      org: "Jio CloudXP",
      detail: "For ownership, technical depth and reliable delivery of Resource-Based Quota Management.",
      image: "/awards/star-performer-best-debutant.webp",
      image800: "/awards/star-performer-best-debutant-800.webp",
    },
    {
      name: "Gold Medal and 3rd Prize, Anveshana 2023",
      org: "Anveshana",
      detail: "For Kavach, an Android women's safety app. It was also shortlisted for the Government of India Tech Innovation Awards.",
    },
  ],
  proof: [
    { value: "100K+", label: "enterprise users on the platform I work on" },
    { value: "-40%", label: "failed orders after provisioning" },
    { value: "-60%", label: "time to close production incidents" },
    { value: "2", label: "awards from Jio CloudXP and Anveshana" },
  ],
  /** The receipt on the home page. Each line is a resume bullet, shortened. */
  receipt: [
    { item: "Async quota validation", result: "100K+ users" },
    { item: "Central quota engine", result: "-40% failed orders" },
    { item: "Capacity validation", result: "no over-commits" },
    { item: "RabbitMQ order pipeline", result: "non-blocking" },
    { item: "Ops diagnostics", result: "-60% incident time" },
    { item: "Postgres-Oracle sync", result: "consistent state" },
    { item: "Disaster recovery", result: "core contributor" },
  ],
  /** Third person, for meta descriptions, structured data and llms.txt only. Not shown on pages. */
  summary:
    "Vansh Mehta (also written Vanshit Mehta) is a backend engineer at Jio Platforms in Mumbai. He builds distributed infrastructure for Jio's cloud platform: asynchronous provisioning pipelines, quota and capacity validation, cross-database sync and disaster recovery workflows serving 100K+ enterprise users. He works in Java, Spring Boot, PostgreSQL, Oracle, RabbitMQ and Redis, won the Star Performer, Best Debutant award at Jio CloudXP and a Gold Medal and 3rd Prize at Anveshana 2023, and explains how software works on YouTube.",
  builds: [
    {
      name: "Kavach",
      year: "2023",
      text: "A women's safety Android app with real-time SOS and location sharing, plus an admin portal for emergency response. Gold Medal and 3rd Prize at Anveshana 2023.",
    },
    {
      name: "B2B Sales Intelligence",
      year: "2026",
      text: "A Spring Boot, Postgres and Redis service that uses the Claude API to send company intelligence reports to sales teams on Telegram.",
    },
    {
      name: "TareefKaro",
      year: "2026",
      text: "A QR-based review and feedback product for cafes. In development.",
    },
  ],
  /** First person. Shown on the About page and reused as FAQ structured data. */
  faq: [
    {
      q: "What do you do at Jio?",
      a: "I'm a backend engineer on Jio's cloud platform. I build the systems that provision compute, storage and networking for enterprise customers: async order pipelines, quota and capacity checks, data sync and disaster recovery.",
    },
    {
      q: "What has your work changed?",
      a: "The quota validation engine cut failed orders after provisioning by 40%, and the diagnostics framework cut the time to close production incidents by 60%. The platform serves 100K+ enterprise users.",
    },
    {
      q: "What have you won?",
      a: "Star Performer, Best Debutant at Jio CloudXP, for my work on Resource-Based Quota Management. Before that, a Gold Medal and 3rd Prize at Anveshana 2023 for Kavach, a women's safety app I built, which was also shortlisted for the Government of India Tech Innovation Awards.",
    },
    {
      q: "What do you work with?",
      a: "Mostly Java 17, Spring Boot, PostgreSQL, Oracle, Redis and RabbitMQ, with Docker and Kubernetes around them. I hold the Certified Kubernetes Application Developer certification.",
    },
    {
      q: "Where can I see you teach?",
      a: "On YouTube at @vanshkmehta. I explain databases, system design and how things work underneath, and I build the thing as I go.",
    },
    {
      q: "How do I reach you?",
      a: "Email works best: vanshitkalpeshmehta4@gmail.com. I'm also on LinkedIn, GitHub and YouTube as vanshkmehta.",
    },
  ],
} as const;
