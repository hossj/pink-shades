import type { HTMLAttributes } from "react";

import { cx } from "@/lib/cx";

import styles from "./Section.module.scss";

type Background = "default" | "surface" | "transparent";
type Spacing = "none" | "compact" | "regular" | "loose";

interface Props extends HTMLAttributes<HTMLElement> {
  background?: Background;
  spacing?: Spacing;
  bordered?: boolean;
}

export function Section({
  background = "transparent",
  spacing = "regular",
  bordered = false,
  className,
  children,
  ...props
}: Props) {
  return (
    <section
      className={cx(
        styles.Section,
        styles[background],
        styles[spacing],
        bordered && styles.bordered,
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
