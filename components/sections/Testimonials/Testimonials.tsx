import type { CSSProperties } from "react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { testimonials } from "@/content/home";
import { cx } from "@/lib/cx";
import { t } from "@/lib/i18n";

import styles from "./Testimonials.module.scss";

const tones = [styles.light, styles.bright, styles.surface];

function initials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("");
}

export function Testimonials() {
  return (
    <Section id="reviews" background="default" spacing="loose">
      <Container>
        <SectionIntro
          eyebrowKey="testimonials.eyebrow"
          titleKey="testimonials.title"
          descriptionKey="testimonials.description"
          className={styles.Intro}
        />

        <div className={styles.Stack}>
          {testimonials.map((testimonial, index) => {
            const name = t(testimonial.nameKey);

            return (
              <figure
                key={testimonial.id}
                className={cx(styles.Card, tones[index % tones.length])}
                style={{ "--_top": `${120 + index * 28}px` } as CSSProperties}
              >
                <div
                  className={styles.Stars}
                  aria-label={t("testimonials.starsLabel")}
                >
                  {t("testimonials.stars")}
                </div>
                <blockquote className={styles.Quote}>
                  {t(testimonial.quoteKey)}
                </blockquote>
                <figcaption className={styles.Caption}>
                  <span className={styles.Avatar}>{initials(name)}</span>
                  <span className={styles.Name}>{name}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
