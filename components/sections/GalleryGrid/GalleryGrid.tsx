"use client";

import Image from "next/image";
import { type CSSProperties, useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { type FilterTab, FilterTabs } from "@/components/ui/FilterTabs";
import { Section } from "@/components/ui/Section";
import {
  galleryCategories,
  type GalleryCategory,
  galleryItems,
} from "@/content/gallery";
import { t, type TranslationKey } from "@/lib/i18n";
import { packMasonryColumns } from "@/lib/masonry";
import { useColumnCount } from "@/lib/useColumnCount";

import styles from "./GalleryGrid.module.scss";

type Filter = "all" | GalleryCategory;

const filters: Filter[] = ["all", ...galleryCategories];

const PAGE_SIZE = 12;
const STAGGER_STEP = 80;

function reveal(image: HTMLImageElement) {
  image.closest("figure")?.classList.add(styles.loaded);
}

function markLoadedRef(image: HTMLImageElement | null) {
  if (image && image.complete && image.naturalWidth > 0) reveal(image);
}

function markLoaded(event: React.SyntheticEvent<HTMLImageElement>) {
  reveal(event.currentTarget);
}

const tabs: FilterTab[] = filters.map((filter) => ({
  id: filter,
  labelKey: `gallery.tabs.${filter}` as TranslationKey,
  count:
    filter === "all"
      ? galleryItems.length
      : galleryItems.filter((item) => item.categories.includes(filter)).length,
}));

export function GalleryGrid() {
  const [active, setActive] = useState<Filter>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const columnCount = useColumnCount();

  const items = useMemo(
    () =>
      active === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.categories.includes(active)),
    [active],
  );

  const columns = useMemo(
    () =>
      packMasonryColumns(
        items.slice(0, visibleCount),
        columnCount,
        (item) => item.height / item.width,
        PAGE_SIZE,
      ),
    [items, visibleCount, columnCount],
  );


  return (
    <Section>
      <Container>
        <FilterTabs
          tabs={tabs}
          active={active}
          onChange={(id) => {
            setActive(id as Filter);
            setVisibleCount(PAGE_SIZE);
          }}
          className={styles.Tabs}
        />

        <div key={active} className={styles.Grid}>
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className={styles.Column}>
              {column.map(({ item, index }) => (
                <figure
                  key={item.src}
                  className={styles.Item}
                  style={
                    {
                      "--_delay": `${(index % PAGE_SIZE) * STAGGER_STEP}ms`,
                    } as CSSProperties
                  }
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                    loading={index < 6 ? "eager" : "lazy"}
                    className={styles.Image}
                    ref={markLoadedRef}
                    onLoad={markLoaded}
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>

        {visibleCount < items.length && (
          <div className={styles.More}>
            <Button
              variant="outline"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            >
              {t("gallery.loadMore")}
              <span className={styles.MoreCount}>
                {items.length - visibleCount}
              </span>
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
