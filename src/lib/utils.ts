export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function canonical(pathname: string, site = "https://vanshkmehta.dev"): string {
  const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return new URL(path, site).href;
}

export function navIsActive(href: string, pathname: string): boolean {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}
