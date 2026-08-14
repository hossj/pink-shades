import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { type PerkIcon, PerkCard } from "@/components/ui/PerkCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { productDetails } from "@/content/productDetails";
import { productItems } from "@/content/products";
import { t, type TranslationKey } from "@/lib/i18n";

import styles from "./MotorizationDetail.module.scss";

const powerOptions = ["hardwired", "battery"] as const;

const benefitIcons: Array<{ id: string; icon: PerkIcon }> = [
  { id: "safety", icon: "shield" },
  { id: "schedule", icon: "clock" },
  { id: "energy", icon: "bolt" },
  { id: "uv", icon: "sun" },
  { id: "reach", icon: "ladder" },
  { id: "smart", icon: "remote" },
];

const treatmentIds = [
  "rollerShades",
  "solarShades",
  "honeycombShades",
  "sheerShadings",
  "wovenWoodShades",
  "flatRomanShades",
  "panelTracks",
  "draperyAndCurtains",
  "plantationShutters",
] as const;

export function MotorizationDetail() {
  return (
    <>
      <Section>
        <Container>
          <SectionIntro
            eyebrowKey="motorizationPage.power.eyebrow"
            titleKey="motorizationPage.power.title"
            descriptionKey="motorizationPage.power.description"
            className={styles.Intro}
          />
          <div className={styles.PowerGrid}>
            {powerOptions.map((option) => (
              <Reveal key={option} className={styles.PowerCard}>
                <p className={styles.PowerNumber}>
                  {t(`motorizationPage.power.${option}.number` as TranslationKey)}
                </p>
                <h3 className={styles.PowerTitle}>
                  {t(`motorizationPage.power.${option}.title` as TranslationKey)}
                </h3>
                <p className={styles.PowerDescription}>
                  {t(
                    `motorizationPage.power.${option}.description` as TranslationKey,
                  )}
                </p>
                <p className={styles.PowerNote}>
                  {t(`motorizationPage.power.${option}.note` as TranslationKey)}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="default" bordered>
        <Container>
          <SectionIntro
            eyebrowKey="motorizationPage.benefits.eyebrow"
            titleKey="motorizationPage.benefits.title"
            descriptionKey="motorizationPage.benefits.description"
            className={styles.Intro}
          />
          <div className={styles.BenefitsGrid}>
            {benefitIcons.map((benefit) => (
              <PerkCard
                key={benefit.id}
                icon={benefit.icon}
                tagKey={
                  `motorizationPage.benefits.${benefit.id}.tag` as TranslationKey
                }
                titleKey={
                  `motorizationPage.benefits.${benefit.id}.title` as TranslationKey
                }
                descriptionKey={
                  `motorizationPage.benefits.${benefit.id}.description` as TranslationKey
                }
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section bordered>
        <Container>
          <SectionIntro
            eyebrowKey="motorizationPage.treatments.eyebrow"
            titleKey="motorizationPage.treatments.title"
            descriptionKey="motorizationPage.treatments.description"
            className={styles.Intro}
          />
          <Reveal className={styles.Chips}>
            {treatmentIds.map((id) => {
              const item = productItems.find((entry) => entry.id === id);
              if (!item) return null;
              return (
                <Link
                  key={id}
                  href={`/products/${productDetails[id].slug}`}
                  className={styles.Chip}
                >
                  {t(item.nameKey)}
                </Link>
              );
            })}
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
