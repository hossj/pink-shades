export const productGroups = [
  "shutters",
  "blinds",
  "shades",
  "drapery",
  "screens",
  "film",
] as const;

export type ProductGroup = (typeof productGroups)[number];

export const productItems = [
  {
    id: "plantationShutters",
    image: "/images/products/plantation-shutters.jpg",
    nameKey: "productsPage.items.plantationShutters",
    group: "shutters",
  },
  {
    id: "biFoldShutters",
    image: "/images/products/bi-fold-shutters.jpg",
    nameKey: "productsPage.items.biFoldShutters",
    group: "shutters",
  },
  {
    id: "bypassTrackShutters",
    image: "/images/products/bypass-track-shutters.jpg",
    nameKey: "productsPage.items.bypassTrackShutters",
    group: "shutters",
  },
  {
    id: "slidingBarnDoorShutters",
    image: "/images/products/sliding-barn-door-shutters.jpg",
    nameKey: "productsPage.items.slidingBarnDoorShutters",
    group: "shutters",
  },
  {
    id: "horizontalWoodBlinds",
    image: "/images/products/horizontal-wood-blinds.jpg",
    nameKey: "productsPage.items.horizontalWoodBlinds",
    group: "blinds",
  },
  {
    id: "fauxWoodBlinds",
    image: "/images/products/faux-wood-blinds.jpg",
    nameKey: "productsPage.items.fauxWoodBlinds",
    group: "blinds",
  },
  {
    id: "pinkluxeBlinds",
    image: "/images/products/pinkluxe-blinds.png",
    nameKey: "productsPage.items.pinkluxeBlinds",
    group: "blinds",
  },
  {
    id: "rollerShades",
    image: "/images/products/roller-shades.jpg",
    nameKey: "productsPage.items.rollerShades",
    group: "shades",
  },
  {
    id: "solarShades",
    image: "/images/products/solar-shades-and-tracks.jpg",
    nameKey: "productsPage.items.solarShades",
    group: "shades",
  },
  {
    id: "flatRomanShades",
    image: "/images/products/flat-roman-shades.jpg",
    nameKey: "productsPage.items.flatRomanShades",
    group: "shades",
  },
  {
    id: "wovenWoodShades",
    image: "/images/products/woven-wood-shades.jpg",
    nameKey: "productsPage.items.wovenWoodShades",
    group: "shades",
  },
  {
    id: "honeycombShades",
    image: "/images/products/honeycomb-shades.jpg",
    nameKey: "productsPage.items.honeycombShades",
    group: "shades",
  },
  {
    id: "sheerShadings",
    image: "/images/products/sheer-shadings.jpg",
    nameKey: "productsPage.items.sheerShadings",
    group: "shades",
  },
  {
    id: "panelTracks",
    image: "/images/products/panel-tracks.jpg",
    nameKey: "productsPage.items.panelTracks",
    group: "shades",
  },
  {
    id: "draperyAndCurtains",
    image: "/images/products/drapery-and-curtains.jpg",
    nameKey: "productsPage.items.draperyAndCurtains",
    group: "drapery",
  },
  {
    id: "retractableScreens",
    image: "/images/products/retractable-screens.jpg",
    nameKey: "productsPage.items.retractableScreens",
    group: "screens",
  },
  {
    id: "windowFilms",
    image: "/images/products/window-films.jpg",
    nameKey: "productsPage.items.windowFilms",
    group: "film",
  },
] as const;
