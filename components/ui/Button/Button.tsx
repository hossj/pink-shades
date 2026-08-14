import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cx } from "@/lib/cx";

import styles from "./Button.module.scss";

type Variant = "primary" | "outline" | "outline-light" | "underline";
type Size = "small" | "medium" | "large";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
};

type AsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type AsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = AsButton | AsAnchor;

export function Button({
  variant = "primary",
  size = "medium",
  icon,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const cls = cx(styles.Button, styles[variant], styles[size], className);

  const content = (
    <>
      {icon && <span className={styles.Icon}>{icon}</span>}
      {children}
    </>
  );

  if (href !== undefined) {
    return (
      <a
        className={cls}
        href={href}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cls}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
