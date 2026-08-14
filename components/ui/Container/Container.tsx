import type { ElementType, HTMLAttributes } from "react";

import { cx } from "@/lib/cx";

import styles from "./Container.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}: Props) {
  return (
    <Tag className={cx(styles.Container, className)} {...props}>
      {children}
    </Tag>
  );
}
