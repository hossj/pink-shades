import { Container } from "@/components/ui/Container";
import { PerkCard } from "@/components/ui/PerkCard";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { aboutPerks } from "@/content/about";

import styles from "./WhyUs.module.scss";

export function WhyUs() {
  return (
    <Section background="default">
      <Container className={styles.Container}>
        <SectionIntro
          eyebrowKey="about.whyUs.eyebrow"
          titleKey="about.whyUs.title"
          descriptionKey="about.whyUs.description"
          className={styles.Intro}
        />

        <div className={styles.Grid}>
          {aboutPerks.map((perk) => (
            <PerkCard
              key={perk.id}
              icon={perk.icon}
              tagKey={perk.tagKey}
              titleKey={perk.titleKey}
              descriptionKey={perk.descriptionKey}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
