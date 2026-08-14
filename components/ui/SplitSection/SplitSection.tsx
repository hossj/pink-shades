import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cx } from "@/lib/cx";

import styles from "./SplitSection.module.scss";

type Spacing = "none" | "compact" | "regular" | "loose";

interface Props {
  id?: string;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  imageContain?: boolean;
  align?: "center" | "start";
  spacing?: Spacing;
  framed?: boolean;
  children: React.ReactNode;
}

export function SplitSection({
  id,
  image,
  imageAlt,
  imagePosition = "right",
  imageContain = false,
  align = "center",
  spacing = "regular",
  framed = false,
  children,
}: Props) {
  return (
    <Section id={id} spacing={spacing}>
      <Container
        className={cx(
          styles.Layout,
          imagePosition === "left" && styles.imageLeft,
          align === "start" && styles.alignStart,
        )}
      >
        <Reveal className={styles.Body}>{children}</Reveal>
        <Reveal>
          <CoverImage
            src={image}
            alt={imageAlt}
            sizes="(max-width: 991px) 100vw, 55vw"
            className={cx(
              styles.Media,
              imageContain && styles.contain,
              framed && styles.framed,
            )}
          />
        </Reveal>
      </Container>
    </Section>
  );
}
