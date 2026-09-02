export const aboutMedia = {
  story: "/images/about-office.jpg",
  serviceArea: "/images/service-area-map.png",
};

export const aboutTeam = [
  {
    id: "sia",
    image: "/images/sia-harandi.jpg",
  },
] as const;

export const aboutPerks = [
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
