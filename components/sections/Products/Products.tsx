"use client";

import { useState } from "react";

import { CoverImage } from "@/components/ui/CoverImage";
import { products } from "@/content/home";
import { cx } from "@/lib/cx";
import { t } from "@/lib/i18n";

import styles from "./Products.module.scss";

export function Products() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="products" className={styles.Products}>
      {products.map((product, index) => {
        const active = index === activeIndex;
        const name = t(product.nameKey);

        return (
          <button
            key={product.id}
            type="button"
            aria-pressed={active}
            onClick={() => setActiveIndex(index)}
            className={cx(styles.Panel, active && styles.active)}
          >
            <CoverImage
              src={product.image}
              alt={name}
              scrim="panel"
              sizes="(max-width: 767px) 100vw, 50vw"
              className={styles.Media}
              imageClassName={cx(styles.Image, !active && styles.muted)}
            />
            <div className={styles.Body}>
              <p className={styles.Tag}>{t(product.tagKey)}</p>
              <h3 className={styles.Name}>{name}</h3>
              <p
                className={cx(styles.Description, active && styles.visible)}
                aria-hidden={!active}
              >
                {t(product.descriptionKey)}
              </p>
            </div>
          </button>
        );
      })}
    </section>
  );
}
