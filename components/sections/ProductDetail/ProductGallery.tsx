"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";
import { packMasonryColumns } from "@/lib/masonry";
import { useColumnCount } from "@/lib/useColumnCount";

import styles from "./ProductGallery.module.scss";

export interface ProductPhoto {
  src: string;
  width: number;
  height: number;
}

interface Props {
  photos: ProductPhoto[];
  alt: string;
}

export function ProductGallery({ photos, alt }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const columnCount = useColumnCount();

  const images = useMemo(
    () =>
      photos.map((photo, index) => ({
        ...photo,
        alt: `${alt} ${index + 1}`,
      })),
    [photos, alt],
  );

  const columns = useMemo(
    () =>
      packMasonryColumns(images, columnCount, (image) => image.height / image.width),
    [images, columnCount],
  );

  return (
    <>
      <div className={styles.Grid}>
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className={styles.Column}>
            {column.map(({ item, index }) => (
              <Reveal key={item.src}>
                <button
                  type="button"
                  aria-label={item.alt}
                  onClick={() => setOpenIndex(index)}
                  className={styles.Photo}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                    className={styles.Image}
                  />
                </button>
              </Reveal>
            ))}
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </>
  );
}
