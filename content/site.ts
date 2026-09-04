export const site = {
  phoneHref: "tel:+1-703-346-8533",
  tollFreeHref: "tel:+1-833-746-5636",
  emailHref: "mailto:info@pinkshadesdesign.com",
};

export const navLinks = [
  { href: "/products", labelKey: "nav.products" },
  { href: "/motorization", labelKey: "nav.motorization" },
  { href: "/gallery", labelKey: "nav.gallery" },
  { href: "/#reviews", labelKey: "nav.reviews" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/contact", labelKey: "nav.contact" },
] as const;

export const footerColumns = [
  {
    id: "shop",
    titleKey: "footer.shop",
    links: [
      { href: "/products", labelKey: "nav.products" },
      { href: "/motorization", labelKey: "nav.motorization" },
      { href: "/gallery", labelKey: "nav.gallery" },
    ],
  },
  {
    id: "company",
    titleKey: "footer.company",
    links: [
      { href: "/about", labelKey: "footer.aboutUs" },
      { href: "/#reviews", labelKey: "nav.reviews" },
      { href: "/contact", labelKey: "nav.contact" },
    ],
  },
] as const;

export const socialLinks = [
  {
    href: "https://facebook.com/pinkblindsandshutters",
    labelKey: "footer.facebook",
  },
  {
    href: "https://instagram.com/pinkblindsandshutters",
    labelKey: "footer.instagram",
  },
] as const;
