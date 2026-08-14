"use client";

import Image from "next/image";
import {
  type CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  galleryCategories,
  type GalleryCategory,
  galleryItems,
} from "@/content/gallery";
import { cx } from "@/lib/cx";
import { t, type TranslationKey } from "@/lib/i18n";

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

function useColumnCount() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const queries = [
      window.matchMedia("(max-width: 767px)"),
      window.matchMedia("(max-width: 1199px)"),
    ];
    const update = () => setColumns(queries[0].matches ? 1 : queries[1].matches ? 2 : 3);
    update();
    queries.forEach((query) => query.addEventListener("change", update));
    return () =>
      queries.forEach((query) => query.removeEventListener("change", update));
  }, []);

  return columns;
}

export function GalleryGrid() {
  const [active, setActive] = useState<Filter>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const columnCount = useColumnCount();
  const tabRefs = useRef(new Map<Filter, HTMLButtonElement>());
  const [pill, setPill] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    ready: false,
  });

  const movePill = useCallback((filter: Filter) => {
    const tab = tabRefs.current.get(filter);
    if (!tab) return;
    setPill({
      left: tab.offsetLeft,
      top: tab.offsetTop,
      width: tab.offsetWidth,
      height: tab.offsetHeight,
      ready: true,
    });
  }, []);

  useEffect(() => {
    movePill(active);
    const onResize = () => movePill(active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, movePill]);

  const items = useMemo(
    () =>
      active === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.categories.includes(active)),
    [active],
  );

  const columns = useMemo(() => {
    const buckets = Array.from(
      { length: columnCount },
      () => [] as Array<{ item: (typeof galleryItems)[number]; index: number }>,
    );
    const heights = new Array(columnCount).fill(0);
    const ratio = (entry: { item: (typeof galleryItems)[number] }) =>
      entry.item.height / entry.item.width;
    const spreadOf = (values: number[]) =>
      Math.max(...values) - Math.min(...values);

    const packBatch = (batch: Array<{ item: (typeof galleryItems)[number]; index: number }>) => {
      const frozen = buckets.map((bucket) => bucket.length);

      for (const entry of batch) {
        const shortest = heights.indexOf(Math.min(...heights));
        buckets[shortest].push(entry);
        heights[shortest] += ratio(entry);
      }

      for (let pass = 0; pass < 60; pass++) {
        const tallest = heights.indexOf(Math.max(...heights));
        const shortest = heights.indexOf(Math.min(...heights));
        if (tallest === shortest) break;
        const current = spreadOf(heights);

        let best = current;
        let action: { tallIndex: number; shortIndex: number | null } | null =
          null;

        for (let i = frozen[tallest]; i < buckets[tallest].length; i++) {
          const delta = ratio(buckets[tallest][i]);
          const moved = [...heights];
          moved[tallest] -= delta;
          moved[shortest] += delta;
          if (spreadOf(moved) < best) {
            best = spreadOf(moved);
            action = { tallIndex: i, shortIndex: null };
          }
          for (let j = frozen[shortest]; j < buckets[shortest].length; j++) {
            const swapDelta = delta - ratio(buckets[shortest][j]);
            const swapped = [...heights];
            swapped[tallest] -= swapDelta;
            swapped[shortest] += swapDelta;
            if (spreadOf(swapped) < best) {
              best = spreadOf(swapped);
              action = { tallIndex: i, shortIndex: j };
            }
          }
        }

        if (!action) break;

        const [tallItem] = buckets[tallest].splice(action.tallIndex, 1);
        if (action.shortIndex === null) {
          buckets[shortest].push(tallItem);
          heights[tallest] -= ratio(tallItem);
          heights[shortest] += ratio(tallItem);
        } else {
          const [shortItem] = buckets[shortest].splice(action.shortIndex, 1);
          buckets[tallest].splice(action.tallIndex, 0, shortItem);
          buckets[shortest].splice(action.shortIndex, 0, tallItem);
          heights[tallest] += ratio(shortItem) - ratio(tallItem);
          heights[shortest] += ratio(tallItem) - ratio(shortItem);
        }
      }
    };

    const shown = items
      .slice(0, visibleCount)
      .map((item, index) => ({ item, index }));
    for (let start = 0; start < shown.length; start += PAGE_SIZE) {
      packBatch(shown.slice(start, start + PAGE_SIZE));
    }

    return buckets;
  }, [items, visibleCount, columnCount]);

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["all", galleryItems.length]]);
    for (const category of galleryCategories) {
      map.set(
        category,
        galleryItems.filter((item) => item.categories.includes(category))
          .length,
      );
    }
    return map;
  }, []);

  return (
    <Section>
      <Container>
        <div role="tablist" className={styles.Tabs}>
          <span
            aria-hidden="true"
            className={cx(styles.Pill, pill.ready && styles.pillReady)}
            style={{
              transform: `translate(${pill.left}px, ${pill.top}px)`,
              width: pill.width,
              height: pill.height,
            }}
          />
          {filters.map((filter) => (
            <button
              key={filter}
              ref={(el) => {
                if (el) tabRefs.current.set(filter, el);
              }}
              type="button"
              role="tab"
              aria-selected={filter === active}
              onClick={() => {
                setActive(filter);
                setVisibleCount(PAGE_SIZE);
              }}
              className={cx(styles.Tab, filter === active && styles.active)}
            >
              {t(`gallery.tabs.${filter}` as TranslationKey)}
              <span className={styles.Count}>{counts.get(filter)}</span>
            </button>
          ))}
        </div>

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
