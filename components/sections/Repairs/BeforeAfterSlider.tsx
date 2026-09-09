"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

import { t } from "@/lib/i18n";

import styles from "./BeforeAfterSlider.module.scss";

interface Props {
  before: string;
  after: string;
}

const clamp = (value: number) => Math.min(100, Math.max(0, value));

export function BeforeAfterSlider({ before, after }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(52);
  const [dragging, setDragging] = useState(false);

  const positionFromEvent = useCallback((clientY: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const { top, height } = frame.getBoundingClientRect();
    setPosition(clamp(((clientY - top) / height) * 100));
  }, []);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const step = event.shiftKey ? 10 : 4;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      setPosition((value) => clamp(value - step));
    } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      setPosition((value) => clamp(value + step));
    } else if (event.key === "Home") {
      setPosition(0);
    } else if (event.key === "End") {
      setPosition(100);
    } else {
      return;
    }
    event.preventDefault();
  };

  return (
    <div
      ref={frameRef}
      className={styles.Frame}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        setDragging(true);
        positionFromEvent(event.clientY);
      }}
      onPointerMove={(event) => {
        if (dragging) positionFromEvent(event.clientY);
      }}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      <Image
        src={after}
        alt={t("repairs.afterAlt")}
        width={664}
        height={1040}
        sizes="(max-width: 991px) 100vw, 46vw"
        className={styles.Image}
        draggable={false}
      />
      <div
        className={styles.BeforeLayer}
        style={{ clipPath: `inset(0 0 ${100 - position}% 0)` }}
      >
        <Image
          src={before}
          alt={t("repairs.beforeAlt")}
          width={664}
          height={1040}
          sizes="(max-width: 991px) 100vw, 46vw"
          className={styles.Image}
          draggable={false}
        />
      </div>

      {position > 12 && (
        <span className={styles.LabelBefore} aria-hidden="true">
          {t("repairs.beforeLabel")}
        </span>
      )}
      {position < 88 && (
        <span className={styles.LabelAfter} aria-hidden="true">
          {t("repairs.afterLabel")}
        </span>
      )}

      <div className={styles.Divider} style={{ top: `${position}%` }}>
        <button
          type="button"
          role="slider"
          aria-label={t("repairs.sliderLabel")}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={t("repairs.sliderValueText")}
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className={styles.Handle}
        >
          <span className={styles.Grip} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
