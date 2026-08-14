"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "@/components/ui/Icon";
import { t } from "@/lib/i18n";

import styles from "./Lightbox.module.scss";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface Props {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onIndexChange }: Props) {
  const previous = useCallback(
    () => onIndexChange((index - 1 + images.length) % images.length),
    [index, images.length, onIndexChange],
  );
  const next = useCallback(
    () => onIndexChange((index + 1) % images.length),
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, previous, next]);

  const image = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className={styles.Backdrop}
      onClick={onClose}
    >
      <button
        type="button"
        aria-label={t("common.close")}
        className={styles.Close}
        onClick={onClose}
      >
        <CloseIcon size={20} />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label={t("common.previous")}
            className={styles.Previous}
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
          >
            <ChevronLeftIcon size={24} />
          </button>
          <button
            type="button"
            aria-label={t("common.next")}
            className={styles.Next}
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
          >
            <ChevronRightIcon size={24} />
          </button>
        </>
      )}

      <figure
        key={image.src}
        className={styles.Stage}
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="90vw"
          className={styles.Image}
        />
      </figure>

      <p className={styles.Counter}>{`${index + 1} / ${images.length}`}</p>
    </div>
  );
}
