"use client";

import { type CSSProperties, useMemo, useState } from "react";

import { Container } from "@/components/ui/Container";
import { type FilterTab, FilterTabs } from "@/components/ui/FilterTabs";
import { ProductCard } from "@/components/ui/ProductCard";
import { Section } from "@/components/ui/Section";
import { productDetails } from "@/content/productDetails";
import {
  type ProductGroup,
  productGroups,
  productItems,
} from "@/content/products";
import { type TranslationKey } from "@/lib/i18n";

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
            <div
              key={product.id}
              className={styles.Cell}
              style={{ "--_delay": `${index * STAGGER_STEP}ms` } as CSSProperties}
            >
              <ProductCard
                href={`/products/${productDetails[product.id].slug}`}
                image={product.image}
                nameKey={product.nameKey}
                groupLabelKey={
                  `productsPage.groups.${product.group}` as TranslationKey
                }
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
