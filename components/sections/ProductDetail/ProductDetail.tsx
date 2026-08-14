import Image from "next/image";

import { EstimateButton } from "@/components/estimate";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SplitSection } from "@/components/ui/SplitSection";
import { type ProductId, productDetails } from "@/content/productDetails";
import { productItems } from "@/content/products";
import { t, type TranslationKey } from "@/lib/i18n";

import styles from "./ProductDetail.module.scss";
import { ProductGallery } from "./ProductGallery";

interface Props {
  productId: ProductId;
}

function groupBlocks(blocks: ReadonlyArray<{ kind: string; key: string }>) {
  const grouped: Array<
    | { kind: "p" | "h"; key: string }
    | { kind: "list"; keys: string[] }
  > = [];
  for (const block of blocks) {
    const last = grouped[grouped.length - 1];
    if (block.kind === "li") {
      if (last?.kind === "list") last.keys.push(block.key);
      else grouped.push({ kind: "list", keys: [block.key] });
    } else {
      grouped.push({ kind: block.kind as "p" | "h", key: block.key });
    }
  }
  return grouped;
}

export function ProductDetail({ productId }: Props) {
  const detail = productDetails[productId];
  const item = productItems.find((entry) => entry.id === productId);
  if (!item) return null;

  const blocks = "blocks" in detail ? groupBlocks(detail.blocks) : [];
  const gallery = "gallery" in detail ? detail.gallery : undefined;
  const photos = "photos" in detail ? detail.photos : undefined;
  const sections = "sections" in detail ? detail.sections : undefined;
  const related = productItems
    .filter((entry) => entry.id !== productId)
    .sort((a, b) =>
      a.group === item.group === (b.group === item.group)
        ? 0
        : a.group === item.group
          ? -1
          : 1,
    )
    .slice(0, 3);

  return (
    <>
      <SplitSection
        image={detail.image}
        imageAlt={t(item.nameKey)}
        align="start"
        spacing="compact"
        framed
      >
        <Eyebrow>
          {t(`productsPage.groups.${item.group}` as TranslationKey)}
        </Eyebrow>
        <h1 className={styles.Title}>{t(item.nameKey)}</h1>
        <p className={styles.Rating}>
          <span aria-hidden="true" className={styles.Stars}>
            {t("productsPage.detail.stars")}
          </span>
          <span className={styles.RatingLabel}>
            {t("productsPage.detail.ratingLabel")}
          </span>
        </p>
        {detail.introKeys.map((key) => (
          <p key={key} className={styles.Description}>
            {t(key)}
          </p>
        ))}
        <ul className={styles.Perks}>
          <li className={styles.Perk}>{t("productsPage.detail.perk1")}</li>
          <li className={styles.Perk}>{t("productsPage.detail.perk2")}</li>
          <li className={styles.Perk}>{t("productsPage.detail.perk3")}</li>
        </ul>
        <EstimateButton
          size="small"
          className={styles.Action}
          note={`${t("estimate.notesPrefill")} ${t(item.nameKey)}.`}
        >
          {t("productsPage.detail.cta")}
        </EstimateButton>
      </SplitSection>

      {(blocks.length > 0 || gallery) && (
        <Section background="surface" spacing="compact">
          <Container className={styles.Details}>
            <Reveal>
              <Eyebrow className={styles.DetailsEyebrow}>
                {t("productsPage.detail.detailsEyebrow")}
              </Eyebrow>
              {blocks.map((block, index) => {
                if (block.kind === "list") {
                  return (
                    <ul key={index} className={styles.List}>
                      {block.keys.map((key) => (
                        <li key={key} className={styles.ListItem}>
                          {t(key as TranslationKey)}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.kind === "h") {
                  return (
                    <h3 key={index} className={styles.Subheading}>
                      {t(block.key as TranslationKey)}
                    </h3>
                  );
                }
                return (
                  <p key={index} className={styles.Paragraph}>
                    {t(block.key as TranslationKey)}
                  </p>
                );
              })}
              {gallery && (
                <div className={styles.Gallery}>
                  <Image
                    src={gallery[0]}
                    alt={t("productsPage.detail.fauxwoodSwatchesAlt")}
                    width={1024}
                    height={575}
                    className={styles.Swatch}
                  />
                  <Image
                    src={gallery[1]}
                    alt={t("productsPage.detail.woodSwatchesAlt")}
                    width={1024}
                    height={434}
                    className={styles.Swatch}
                  />
                </div>
              )}
            </Reveal>
          </Container>
        </Section>
      )}

      {photos && photos.length > 0 && (
        <Section>
          <Container>
            <Reveal className={styles.GalleryHeader}>
              <Eyebrow>{t("productsPage.detail.galleryEyebrow")}</Eyebrow>
              <h2 className={styles.GalleryTitle}>
                {t("productsPage.detail.galleryTitle")}
              </h2>
            </Reveal>
            <ProductGallery photos={[...photos]} alt={t(item.nameKey)} />
          </Container>
        </Section>
      )}

      {sections?.map((section, index) => (
        <SplitSection
          key={section.titleKey}
          image={section.image}
          imageAlt={t(section.titleKey)}
          imagePosition={index % 2 === 0 ? "left" : "right"}
        >
          <h2 className={styles.SectionTitle}>{t(section.titleKey)}</h2>
          <p className={styles.Description}>{t(section.textKey)}</p>
        </SplitSection>
      ))}

      <Section bordered>
        <Container>
          <Reveal className={styles.RelatedHeader}>
            <Eyebrow>{t("productsPage.detail.related")}</Eyebrow>
            <h2 className={styles.RelatedTitle}>
              {t("productsPage.detail.relatedTitle")}
            </h2>
          </Reveal>
          <div className={styles.RelatedGrid}>
            {related.map((entry) => (
              <ProductCard
                key={entry.id}
                href={`/products/${productDetails[entry.id].slug}`}
                image={entry.image}
                nameKey={entry.nameKey}
                groupLabelKey={
                  `productsPage.groups.${entry.group}` as TranslationKey
                }
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
