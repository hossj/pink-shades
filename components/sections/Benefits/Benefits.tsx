import { Container } from "@/components/ui/Container";
import { PerkCard } from "@/components/ui/PerkCard";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { benefits } from "@/content/home";

import styles from "./Benefits.module.scss";

export function Benefits() {
  return (
    <Section background="default">
      <Container>
        <SectionIntro
          eyebrowKey="benefits.eyebrow"
          titleKey="benefits.title"
          descriptionKey="benefits.description"
          className={styles.Intro}
        />

        <div className={styles.Grid}>
          {benefits.map((benefit) => (
            <PerkCard
              key={benefit.id}
              icon={benefit.icon}
              tagKey={benefit.tagKey}
              titleKey={benefit.titleKey}
              descriptionKey={benefit.descriptionKey}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
