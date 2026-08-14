import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PhoneIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";

import { ContactForm } from "./ContactForm";
import styles from "./ContactSection.module.scss";

const directionsHref =
  "https://www.google.com/maps/dir/?api=1&destination=6830+Elm+Street,+McLean,+VA+22101";

export function ContactSection() {
  return (
    <Section>
      <Container className={styles.Layout}>
        <Reveal className={styles.Info}>
          <Eyebrow>{t("contact.info.eyebrow")}</Eyebrow>

          <div className={styles.InfoBlock}>
            <h2 className={styles.InfoTitle}>{t("contact.info.visitTitle")}</h2>
            <p className={styles.InfoText}>
              {t("site.addressLine1")}
              <br />
              {t("site.addressLine2")}
            </p>
            <a
              href={directionsHref}
              target="_blank"
              rel="noreferrer"
              className={styles.InfoLink}
            >
              {t("contact.info.directions")}
            </a>
          </div>

          <div className={styles.InfoBlock}>
            <h2 className={styles.InfoTitle}>{t("contact.info.callTitle")}</h2>
            <a href={site.phoneHref} className={styles.InfoAction}>
              <PhoneIcon size={16} />
              {t("site.phone")}
            </a>
            <a href={site.tollFreeHref} className={styles.InfoAction}>
              <PhoneIcon size={16} />
              {t("site.tollFree")}
            </a>
          </div>

          <div className={styles.InfoBlock}>
            <h2 className={styles.InfoTitle}>{t("contact.info.writeTitle")}</h2>
            <a href={site.emailHref} className={styles.InfoLink}>
              {t("site.email")}
            </a>
          </div>
        </Reveal>

        <Reveal className={styles.FormColumn}>
          <Eyebrow>{t("contact.form.eyebrow")}</Eyebrow>
          <h2 className={styles.FormTitle}>{t("contact.form.title")}</h2>
          <ContactForm />
        </Reveal>
      </Container>
    </Section>
  );
}
