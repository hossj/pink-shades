"use client";

import { type CSSProperties, useMemo, useState } from "react";

import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { type FilterTab, FilterTabs } from "@/components/ui/FilterTabs";
import { Section } from "@/components/ui/Section";
import {
  type ProductGroup,
  productGroups,
  productItems,
} from "@/content/products";
import { t, type TranslationKey } from "@/lib/i18n";

import styles from "./ProductsGrid.module.scss";

type Filter = "all" | ProductGroup;

const STAGGER_STEP = 60;

const tabs: FilterTab[] = [
  {
    id: "all",
    labelKey: "productsPage.tabs.all",
    count: productItems.length,
  },
  ...productGroups.map((group) => ({
    id: group,
    labelKey: `productsPage.groups.${group}` as TranslationKey,
    count: productItems.filter((item) => item.group === group).length,
  })),
];

export function ProductsGrid() {
  const [active, setActive] = useState<Filter>("all");

  const items = useMemo(
    () =>
      active === "all"
        ? productItems
        : productItems.filter((item) => item.group === active),
    [active],
  );

  return (
    <Section>
      <Container>
        <FilterTabs
          tabs={tabs}
          active={active}
          onChange={(id) => setActive(id as Filter)}
          className={styles.Tabs}
        />

        <div key={active} className={styles.Grid}>
          {items.map((product, index) => (
            <article
              key={product.id}
              className={styles.Card}
              style={{ "--_delay": `${index * STAGGER_STEP}ms` } as CSSProperties}
            >
              <CoverImage
                src={product.image}
                alt={t(product.nameKey)}
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                className={styles.Media}
                imageClassName={styles.Image}
              />
              <div className={styles.Body}>
                <p className={styles.Tag}>
                  {t(`productsPage.groups.${product.group}` as TranslationKey)}
                </p>
                <h2 className={styles.Name}>{t(product.nameKey)}</h2>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
