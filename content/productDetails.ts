import type { TranslationKey } from "@/lib/i18n";

export interface DetailBlock {
  kind: "p" | "h" | "li";
  key: TranslationKey;
}

export interface FilmSection {
  titleKey: TranslationKey;
  textKey: TranslationKey;
  image: string;
}

export interface ProductDetail {
  slug: string;
  image: string;
  introKeys: TranslationKey[];
  photos?: Array<{ src: string; width: number; height: number }>;
  blocks?: DetailBlock[];
  gallery?: string[];
  sections?: FilmSection[];
}

export const productDetails = {
  plantationShutters: {
    slug: "plantation-shutters",
    image: "/images/products/plantation-shutters.jpg",
    introKeys: ["productsPage.details.plantationShutters.intro1"],
    photos: [
      { src: "/images/products/gallery/plantationShutters-1.jpg", width: 900, height: 599 },
      { src: "/images/products/gallery/plantationShutters-2.jpg", width: 640, height: 640 },
      { src: "/images/products/gallery/plantationShutters-3.jpg", width: 640, height: 640 },
      { src: "/images/products/gallery/plantationShutters-4.jpg", width: 900, height: 675 },
      { src: "/images/products/gallery/plantationShutters-5.png", width: 900, height: 279 },
      { src: "/images/products/gallery/plantationShutters-6.jpg", width: 900, height: 600 },
      { src: "/images/products/gallery/plantationShutters-7.jpg", width: 900, height: 675 },
      { src: "/images/products/gallery/plantationShutters-8.jpg", width: 900, height: 437 },
      { src: "/images/products/gallery/plantationShutters-9.jpg", width: 1400, height: 1050 },
      { src: "/images/products/gallery/plantationShutters-10.jpg", width: 1400, height: 1050 },
      { src: "/images/products/gallery/plantationShutters-11.jpg", width: 1400, height: 932 },
      { src: "/images/products/gallery/plantationShutters-12.jpg", width: 1400, height: 1050 },
    ],
    blocks: [
    { kind: "p", key: "productsPage.details.plantationShutters.block1" },
    { kind: "h", key: "productsPage.details.plantationShutters.block2" },
    { kind: "li", key: "productsPage.details.plantationShutters.block3" },
    { kind: "li", key: "productsPage.details.plantationShutters.block4" },
    { kind: "li", key: "productsPage.details.plantationShutters.block5" },
    { kind: "li", key: "productsPage.details.plantationShutters.block6" },
    { kind: "li", key: "productsPage.details.plantationShutters.block7" },
    { kind: "p", key: "productsPage.details.plantationShutters.block8" },
    ],
  },
  biFoldShutters: {
    slug: "bi-fold-track-shutters",
    image: "/images/products/bi-fold-shutters.jpg",
    introKeys: ["productsPage.details.biFoldShutters.intro1", "productsPage.details.biFoldShutters.intro2"],
    photos: [
      { src: "/images/products/gallery/biFoldShutters-1.jpg", width: 900, height: 363 },
      { src: "/images/products/gallery/biFoldShutters-2.jpg", width: 500, height: 450 },
      { src: "/images/products/gallery/biFoldShutters-3.jpg", width: 1050, height: 1400 },
      { src: "/images/products/gallery/biFoldShutters-4.jpg", width: 1050, height: 1400 },
    ],
  },
  bypassTrackShutters: {
    slug: "bypass-track-shutters",
    image: "/images/products/bypass-track-shutters.jpg",
    introKeys: ["productsPage.details.bypassTrackShutters.intro1"],
    photos: [
      { src: "/images/products/gallery/bypassTrackShutters-1.jpg", width: 640, height: 512 },
      { src: "/images/products/gallery/bypassTrackShutters-2.jpg", width: 640, height: 640 },
      { src: "/images/products/gallery/bypassTrackShutters-3.jpg", width: 354, height: 420 },
      { src: "/images/products/gallery/bypassTrackShutters-4.jpg", width: 883, height: 500 },
      { src: "/images/products/gallery/bypassTrackShutters-5.jpg", width: 400, height: 480 },
      { src: "/images/products/gallery/bypassTrackShutters-6.jpg", width: 770, height: 500 },
      { src: "/images/products/gallery/bypassTrackShutters-7.jpg", width: 1050, height: 1400 },
    ],
  },
  slidingBarnDoorShutters: {
    slug: "sliding-barn-door-shutters",
    image: "/images/products/sliding-barn-door-shutters.jpg",
    introKeys: ["productsPage.details.slidingBarnDoorShutters.intro1"],
    photos: [
      { src: "/images/products/gallery/slidingBarnDoorShutters-1.jpg", width: 900, height: 363 },
      { src: "/images/products/gallery/slidingBarnDoorShutters-2.jpg", width: 900, height: 900 },
      { src: "/images/products/gallery/slidingBarnDoorShutters-3.jpg", width: 900, height: 900 },
      { src: "/images/products/gallery/slidingBarnDoorShutters-4.jpg", width: 900, height: 900 },
      { src: "/images/products/gallery/slidingBarnDoorShutters-5.jpg", width: 900, height: 900 },
      { src: "/images/products/gallery/slidingBarnDoorShutters-6.jpg", width: 900, height: 900 },
      { src: "/images/products/gallery/slidingBarnDoorShutters-7.jpg", width: 900, height: 900 },
      { src: "/images/products/gallery/slidingBarnDoorShutters-8.jpg", width: 900, height: 900 },
    ],
  },
  horizontalWoodBlinds: {
    slug: "horizontal-wood-blinds",
    image: "/images/products/horizontal-wood-blinds.jpg",
    introKeys: ["productsPage.details.horizontalWoodBlinds.intro1"],
    photos: [
      { src: "/images/products/gallery/horizontalWoodBlinds-1.jpg", width: 900, height: 600 },
      { src: "/images/products/gallery/horizontalWoodBlinds-2.jpg", width: 900, height: 675 },
      { src: "/images/products/gallery/horizontalWoodBlinds-3.jpg", width: 900, height: 675 },
      { src: "/images/products/gallery/horizontalWoodBlinds-4.jpg", width: 900, height: 675 },
      { src: "/images/products/gallery/horizontalWoodBlinds-5.jpg", width: 750, height: 1000 },
      { src: "/images/products/gallery/horizontalWoodBlinds-6.jpg", width: 750, height: 1000 },
      { src: "/images/products/gallery/horizontalWoodBlinds-7.jpg", width: 750, height: 963 },
      { src: "/images/products/gallery/horizontalWoodBlinds-8.jpg", width: 750, height: 964 },
    ],
  },
  fauxWoodBlinds: {
    slug: "faux-wood-blinds",
    image: "/images/products/faux-wood-blinds.jpg",
    introKeys: ["productsPage.details.fauxWoodBlinds.intro1"],
    photos: [
      { src: "/images/products/gallery/fauxWoodBlinds-1.jpg", width: 900, height: 600 },
      { src: "/images/products/gallery/fauxWoodBlinds-2.jpg", width: 900, height: 637 },
      { src: "/images/products/gallery/fauxWoodBlinds-3.jpg", width: 900, height: 637 },
      { src: "/images/products/gallery/fauxWoodBlinds-4.jpg", width: 900, height: 600 },
    ],
  },
  pinkluxeBlinds: {
    slug: "pinkluxe-blinds",
    image: "/images/products/pinkluxe-blinds.png",
    introKeys: ["productsPage.details.pinkluxeBlinds.intro1"],
    blocks: [
      { kind: "p", key: "productsPage.details.pinkluxeBlinds.block1" },
      { kind: "p", key: "productsPage.details.pinkluxeBlinds.block2" },
      { kind: "p", key: "productsPage.details.pinkluxeBlinds.block3" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block4" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block5" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block6" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block7" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block8" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block9" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block10" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block11" },
      { kind: "p", key: "productsPage.details.pinkluxeBlinds.block12" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block13" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block14" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block15" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block16" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block17" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block18" },
      { kind: "li", key: "productsPage.details.pinkluxeBlinds.block19" },
    ],
    gallery: [
      "/images/products/pinkluxe-fauxwood-swatches.png",
      "/images/products/pinkluxe-wood-swatches.png",
    ],
  },
  rollerShades: {
    slug: "roller-shades",
    image: "/images/products/roller-shades.jpg",
    introKeys: ["productsPage.details.rollerShades.intro1"],
    photos: [
      { src: "/images/products/gallery/rollerShades-1.jpg", width: 900, height: 633 },
      { src: "/images/products/gallery/rollerShades-2.jpg", width: 378, height: 697 },
      { src: "/images/products/gallery/rollerShades-3.jpg", width: 510, height: 600 },
      { src: "/images/products/gallery/rollerShades-4.jpg", width: 499, height: 600 },
      { src: "/images/products/gallery/rollerShades-5.jpg", width: 900, height: 439 },
      { src: "/images/products/gallery/rollerShades-6.jpg", width: 434, height: 600 },
      { src: "/images/products/gallery/rollerShades-7.jpg", width: 874, height: 665 },
      { src: "/images/products/gallery/rollerShades-8.jpg", width: 499, height: 600 },
      { src: "/images/products/gallery/rollerShades-9.jpg", width: 1050, height: 1400 },
      { src: "/images/products/gallery/rollerShades-10.jpg", width: 1050, height: 1400 },
      { src: "/images/products/gallery/rollerShades-11.jpg", width: 787, height: 1400 },
      { src: "/images/products/gallery/rollerShades-12.jpg", width: 1050, height: 1400 },
    ],
  },
  solarShades: {
    slug: "solar-shades-and-tracks",
    image: "/images/products/solar-shades-and-tracks.jpg",
    introKeys: ["productsPage.details.solarShades.intro1"],
  },
  flatRomanShades: {
    slug: "flat-roman-shades",
    image: "/images/products/flat-roman-shades.jpg",
    introKeys: ["productsPage.details.flatRomanShades.intro1"],
    photos: [
      { src: "/images/products/gallery/flatRomanShades-1.jpg", width: 602, height: 477 },
      { src: "/images/products/gallery/flatRomanShades-2.jpg", width: 800, height: 654 },
      { src: "/images/products/gallery/flatRomanShades-3.jpg", width: 900, height: 675 },
      { src: "/images/products/gallery/flatRomanShades-4.jpg", width: 900, height: 611 },
      { src: "/images/products/gallery/flatRomanShades-5.jpg", width: 576, height: 890 },
      { src: "/images/products/gallery/flatRomanShades-6.jpg", width: 390, height: 600 },
      { src: "/images/products/gallery/flatRomanShades-7.jpg", width: 398, height: 600 },
      { src: "/images/products/gallery/flatRomanShades-8.jpg", width: 689, height: 600 },
    ],
  },
  wovenWoodShades: {
    slug: "woven-wood-shades",
    image: "/images/products/woven-wood-shades.jpg",
    introKeys: ["productsPage.details.wovenWoodShades.intro1"],
    photos: [
      { src: "/images/products/gallery/wovenWoodShades-1.jpg", width: 900, height: 720 },
      { src: "/images/products/gallery/wovenWoodShades-2.jpg", width: 768, height: 1024 },
      { src: "/images/products/gallery/wovenWoodShades-3.jpg", width: 720, height: 900 },
      { src: "/images/products/gallery/wovenWoodShades-4.jpg", width: 900, height: 720 },
      { src: "/images/products/gallery/wovenWoodShades-5.png", width: 900, height: 1200 },
      { src: "/images/products/gallery/wovenWoodShades-6.jpg", width: 1050, height: 1400 },
      { src: "/images/products/gallery/wovenWoodShades-7.jpg", width: 1050, height: 1400 },
      { src: "/images/products/gallery/wovenWoodShades-8.jpg", width: 1050, height: 1400 },
    ],
  },
  honeycombShades: {
    slug: "honeycomb-shades",
    image: "/images/products/honeycomb-shades.jpg",
    introKeys: ["productsPage.details.honeycombShades.intro1"],
    photos: [
      { src: "/images/products/gallery/honeycombShades-1.jpg", width: 900, height: 600 },
      { src: "/images/products/gallery/honeycombShades-2.jpg", width: 576, height: 389 },
      { src: "/images/products/gallery/honeycombShades-3.jpg", width: 576, height: 384 },
      { src: "/images/products/gallery/honeycombShades-4.jpg", width: 900, height: 675 },
      { src: "/images/products/gallery/honeycombShades-5.jpg", width: 576, height: 384 },
      { src: "/images/products/gallery/honeycombShades-6.jpg", width: 900, height: 675 },
      { src: "/images/products/gallery/honeycombShades-7.png", width: 900, height: 531 },
      { src: "/images/products/gallery/honeycombShades-8.png", width: 529, height: 900 },
      { src: "/images/products/gallery/honeycombShades-9.jpg", width: 1400, height: 787 },
      { src: "/images/products/gallery/honeycombShades-10.jpg", width: 1050, height: 1400 },
      { src: "/images/products/gallery/honeycombShades-11.jpg", width: 1050, height: 1400 },
      { src: "/images/products/gallery/honeycombShades-12.jpg", width: 1400, height: 1050 },
    ],
  },
  sheerShadings: {
    slug: "sheer-shadings",
    image: "/images/products/sheer-shadings.jpg",
    introKeys: ["productsPage.details.sheerShadings.intro1"],
    photos: [
      { src: "/images/products/gallery/sheerShadings-1.jpg", width: 625, height: 500 },
      { src: "/images/products/gallery/sheerShadings-2.jpg", width: 768, height: 1164 },
      { src: "/images/products/gallery/sheerShadings-3.jpg", width: 900, height: 675 },
      { src: "/images/products/gallery/sheerShadings-4.jpg", width: 900, height: 675 },
      { src: "/images/products/gallery/sheerShadings-5.jpg", width: 900, height: 675 },
      { src: "/images/products/gallery/sheerShadings-6.jpg", width: 900, height: 675 },
      { src: "/images/products/gallery/sheerShadings-7.jpg", width: 900, height: 675 },
      { src: "/images/products/gallery/sheerShadings-8.jpg", width: 900, height: 675 },
      { src: "/images/products/gallery/sheerShadings-9.jpg", width: 1400, height: 1218 },
    ],
  },
  panelTracks: {
    slug: "panel-tracks",
    image: "/images/products/panel-tracks.jpg",
    introKeys: ["productsPage.details.panelTracks.intro1"],
    photos: [
      { src: "/images/products/gallery/panelTracks-1.jpg", width: 640, height: 480 },
      { src: "/images/products/gallery/panelTracks-2.jpg", width: 432, height: 291 },
      { src: "/images/products/gallery/panelTracks-3.jpg", width: 800, height: 600 },
      { src: "/images/products/gallery/panelTracks-4.jpg", width: 900, height: 600 },
      { src: "/images/products/gallery/panelTracks-5.jpg", width: 381, height: 576 },
      { src: "/images/products/gallery/panelTracks-6.jpg", width: 576, height: 864 },
      { src: "/images/products/gallery/panelTracks-7.jpg", width: 900, height: 819 },
      { src: "/images/products/gallery/panelTracks-8.jpg", width: 900, height: 819 },
      { src: "/images/products/gallery/panelTracks-9.jpg", width: 1400, height: 1050 },
      { src: "/images/products/gallery/panelTracks-10.jpg", width: 1050, height: 1400 },
      { src: "/images/products/gallery/panelTracks-11.jpg", width: 1050, height: 1400 },
    ],
  },
  draperyAndCurtains: {
    slug: "drapery-and-curtains",
    image: "/images/products/drapery-and-curtains.jpg",
    introKeys: ["productsPage.details.draperyAndCurtains.intro1"],
    photos: [
      { src: "/images/products/gallery/draperyAndCurtains-1.jpg", width: 900, height: 631 },
      { src: "/images/products/gallery/draperyAndCurtains-2.jpg", width: 800, height: 800 },
      { src: "/images/products/gallery/draperyAndCurtains-3.jpg", width: 900, height: 631 },
      { src: "/images/products/gallery/draperyAndCurtains-4.jpg", width: 900, height: 308 },
      { src: "/images/products/gallery/draperyAndCurtains-5.jpg", width: 800, height: 1097 },
      { src: "/images/products/gallery/draperyAndCurtains-6.jpg", width: 900, height: 599 },
      { src: "/images/products/gallery/draperyAndCurtains-7.jpg", width: 557, height: 900 },
      { src: "/images/products/gallery/draperyAndCurtains-8.jpg", width: 900, height: 591 },
      { src: "/images/products/gallery/draperyAndCurtains-9.jpg", width: 1050, height: 1400 },
      { src: "/images/products/gallery/draperyAndCurtains-10.jpg", width: 1400, height: 1050 },
      { src: "/images/products/gallery/draperyAndCurtains-11.jpg", width: 1400, height: 1050 },
      { src: "/images/products/gallery/draperyAndCurtains-12.jpg", width: 1009, height: 1400 },
    ],
  },
  retractableScreens: {
    slug: "retractable-screens",
    image: "/images/products/retractable-screens.jpg",
    introKeys: ["productsPage.details.retractableScreens.intro1"],
    photos: [
      { src: "/images/products/gallery/retractableScreens-1.jpg", width: 800, height: 800 },
    ],
    blocks: [
    { kind: "p", key: "productsPage.details.retractableScreens.block1" },
    { kind: "p", key: "productsPage.details.retractableScreens.block2" },
    { kind: "p", key: "productsPage.details.retractableScreens.block3" },
    { kind: "p", key: "productsPage.details.retractableScreens.block4" },
    { kind: "p", key: "productsPage.details.retractableScreens.block5" },
    { kind: "p", key: "productsPage.details.retractableScreens.block6" },
    ],
  },
  windowFilms: {
    slug: "window-films-and-decorative-glass",
    image: "/images/products/window-films.jpg",
    introKeys: ["productsPage.details.windowFilms.intro1"],
    sections: [
      { titleKey: "productsPage.details.windowFilms.section1Title", textKey: "productsPage.details.windowFilms.section1Text", image: "/images/products/film-security.jpg" },
      { titleKey: "productsPage.details.windowFilms.section2Title", textKey: "productsPage.details.windowFilms.section2Text", image: "/images/products/film-decorative.jpg" },
      { titleKey: "productsPage.details.windowFilms.section3Title", textKey: "productsPage.details.windowFilms.section3Text", image: "/images/products/film-residential.jpg" },
      { titleKey: "productsPage.details.windowFilms.section4Title", textKey: "productsPage.details.windowFilms.section4Text", image: "/images/products/film-commercial.jpg" },
      { titleKey: "productsPage.details.windowFilms.section5Title", textKey: "productsPage.details.windowFilms.section5Text", image: "/images/products/film-decorative-glass.jpg" },
    ],
  },
} as const satisfies Record<string, ProductDetail>;

export type ProductId = keyof typeof productDetails;
