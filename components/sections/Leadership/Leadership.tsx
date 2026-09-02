import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { aboutTeam } from "@/content/about";
import { t, type TranslationKey } from "@/lib/i18n";

import styles from "./Leadership.module.scss";

export function Leadership() {
  return (
    <Section background="surface">
      <Container>
        <SectionIntro
          eyebrowKey="about.leadership.eyebrow"
          titleKey="about.leadership.title"
          className={styles.Intro}
        />

        <div className={styles.Grid}>
          {aboutTeam.map((member) => (
            <Reveal key={member.id} className={styles.Card}>
              <Image
                src={member.image}
                alt={t(
                  `about.leadership.members.${member.id}.imageAlt` as TranslationKey,
                )}
                width={288}
                height={360}
                className={styles.Portrait}
              />
              <div className={styles.Body}>
                <p className={styles.Caption}>
                  {t(
                    `about.leadership.members.${member.id}.name` as TranslationKey,
                  )}{" "}
                  —{" "}
                  {t(
                    `about.leadership.members.${member.id}.role` as TranslationKey,
                  )}
                </p>
                <p className={styles.Bio}>
                  {t(
                    `about.leadership.members.${member.id}.bio` as TranslationKey,
                  )}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
