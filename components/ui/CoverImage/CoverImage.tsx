import Image from "next/image";

import { cx } from "@/lib/cx";

import styles from "./CoverImage.module.scss";

type Scrim = "none" | "hero" | "panel" | "soft";

interface Props {
  src: string;
  alt: string;
  scrim?: Scrim;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  children?: React.ReactNode;
}

export function CoverImage({
  src,
  alt,
  scrim = "none",
  sizes = "100vw",
  priority = false,
  className,
  imageClassName,
  children,
}: Props) {
  return (
    <div className={cx(styles.CoverImage, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cx(styles.Image, imageClassName)}
      />
      {scrim !== "none" && <div className={cx(styles.Scrim, styles[scrim])} />}
      {children}
    </div>
  );
}
