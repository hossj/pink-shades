import type { HTMLAttributes } from "react";

import { cx } from "@/lib/cx";

import styles from "./Eyebrow.module.scss";

type Tone = "primary" | "muted" | "light" | "on-dark";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  tone?: Tone;
}

export function Eyebrow({ tone = "primary", className, children, ...props }: Props) {
  return (
    <p className={cx(styles.Eyebrow, styles[tone], className)} {...props}>
      {children}
    </p>
  );
}
