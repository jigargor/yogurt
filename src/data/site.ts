/**
 * Org identity for Métier v0.
 * Leave email/instagram null until real (O001, O002). Keep noindex until then.
 */

export interface NavItem {
  href: string;
  label: string;
}

export interface Site {
  name: string;
  tagline: string;
  hero: string;
  offeringsSubhead: string;
  who: string;
  scope: string;
  founder: string;
  founderRole: string;
  /** mailto local part + domain once known; null hides inquire links */
  email: string | null;
  /** @handle without URL; null hides social */
  instagram: string | null;
  nav: NavItem[];
  noindex: boolean;
}

export const site: Site = {
  name: "Métier",
  tagline: "Yoga and strength training.",
  hero: "Movement practice. Clear scope. Show up.",
  offeringsSubhead: "Park class. Training. No soft sell.",
  who: "Métier is a small practice in Orange County: outdoor yoga and personal training with plain language and a hard line on scope.",
  scope: "Yoga and strength work. Not therapy.",
  founder: "Jigar Gor",
  founderRole: "Teacher and founder",
  email: null,
  instagram: null,
  noindex: true,
  nav: [
    { href: "/", label: "Home" },
    { href: "/free-body", label: "Free Body" },
    { href: "/training", label: "Training" },
    { href: "/about", label: "About" },
  ],
};

export function mailtoHref(subject?: string): string | null {
  if (!site.email) return null;
  const base = `mailto:${site.email}`;
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
}

export function instagramHref(): string | null {
  if (!site.instagram) return null;
  const handle = site.instagram.replace(/^@/, "");
  return `https://instagram.com/${handle}`;
}

export function instagramLabel(): string | null {
  if (!site.instagram) return null;
  return site.instagram.startsWith("@") ? site.instagram : `@${site.instagram}`;
}
