export const media = {
  hero: "/images/hero-plantation-shutters.jpg",
  rollerShades: "/images/roller-shades.jpg",
  commercial: "/images/commercial.jpg",
  repairBefore: "/images/roller-shade-before.webp",
  repairAfter: "/images/roller-shade-after.webp",
};

export const stats = [
  {
    id: "years",
    valueKey: "stats.yearsValue",
    labelKey: "stats.yearsLabel",
    highlight: false,
  },
  {
    id: "rating",
    valueKey: "stats.ratingValue",
    labelKey: "stats.ratingLabel",
    highlight: true,
  },
  {
    id: "local",
    valueKey: "stats.localValue",
    labelKey: "stats.localLabel",
    highlight: false,
  },
] as const;

export const products = [
  {
    id: "woodBlinds",
    image: "/images/wood-blinds.jpg",
    nameKey: "products.woodBlinds.name",
    tagKey: "products.woodBlinds.tag",
    descriptionKey: "products.woodBlinds.description",
  },
  {
    id: "plantationShutters",
    image: "/images/hero-plantation-shutters.jpg",
    nameKey: "products.plantationShutters.name",
    tagKey: "products.plantationShutters.tag",
    descriptionKey: "products.plantationShutters.description",
  },
  {
    id: "topDownBottomUp",
    image: "/images/top-down-bottom-up-shades.jpg",
    nameKey: "products.topDownBottomUp.name",
    tagKey: "products.topDownBottomUp.tag",
    descriptionKey: "products.topDownBottomUp.description",
  },
  {
    id: "designerRollerShades",
    image: "/images/roller-shades.jpg",
    nameKey: "products.designerRollerShades.name",
    tagKey: "products.designerRollerShades.tag",
    descriptionKey: "products.designerRollerShades.description",
  },
] as const;

export const motorizationOptions = [
  {
    id: "hardwired",
    numberKey: "motorization.hardwired.number",
    titleKey: "motorization.hardwired.title",
    descriptionKey: "motorization.hardwired.description",
  },
  {
    id: "battery",
    numberKey: "motorization.battery.number",
    titleKey: "motorization.battery.title",
    descriptionKey: "motorization.battery.description",
  },
] as const;

export const benefits = [
  {
    id: "local",
    icon: "home",
    tagKey: "benefits.local.tag",
    titleKey: "benefits.local.title",
    descriptionKey: "benefits.local.description",
  },
  {
    id: "estimate",
    icon: "ruler",
    tagKey: "benefits.estimate.tag",
    titleKey: "benefits.estimate.title",
    descriptionKey: "benefits.estimate.description",
  },
  {
    id: "delivery",
    icon: "delivery",
    tagKey: "benefits.delivery.tag",
    titleKey: "benefits.delivery.title",
    descriptionKey: "benefits.delivery.description",
  },
] as const;

export const testimonials = [
  {
    id: "garnet",
    nameKey: "testimonials.garnet.name",
    quoteKey: "testimonials.garnet.quote",
  },
  {
    id: "ramin",
    nameKey: "testimonials.ramin.name",
    quoteKey: "testimonials.ramin.quote",
  },
  {
    id: "susan",
    nameKey: "testimonials.susan.name",
    quoteKey: "testimonials.susan.quote",
  },
] as const;

