export const site = {
  phoneHref: "tel:+1-703-346-8533",
  tollFreeHref: "tel:+1-833-746-5636",
  emailHref: "mailto:info@pinkblindsandshutters.com",
};

export const navLinks = [
  { href: "/products", labelKey: "nav.products" },
  { href: "/#motorization", labelKey: "nav.motorization" },
  { href: "/gallery", labelKey: "nav.gallery" },
  { href: "/#reviews", labelKey: "nav.reviews" },
  { href: "/about", labelKey: "nav.about" },
] as const;

export const footerColumns = [
  {
    id: "company",
    titleKey: "footer.company",
    links: [
      { href: "/about", labelKey: "footer.aboutUs" },
      { href: "/gallery", labelKey: "footer.gallery" },
      { href: "#", labelKey: "footer.pricing" },
      { href: "#", labelKey: "footer.news" },
    ],
  },
  {
    id: "partnerships",
    titleKey: "footer.partnerships",
    links: [
      { href: "#", labelKey: "footer.franchise" },
      { href: "#", labelKey: "footer.designers" },
      { href: "#", labelKey: "footer.builders" },
      { href: "#", labelKey: "footer.realtors" },
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
  {
    href: "https://youtube.com/pinkblindsandshutters",
    labelKey: "footer.youtube",
  },
] as const;
