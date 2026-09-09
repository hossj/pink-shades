"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { cx } from "@/lib/cx";
import { t } from "@/lib/i18n";

import styles from "./BeforeAfterSlider.module.scss";

interface Props {
  before: string;
  after: string;
}

const clamp = (value: number) => Math.min(100, Math.max(0, value));

const REST_POSITION = 52;
/** A small nudge up, then down, then back to rest — enough to read as draggable. */
const HINT_DELAY = 1000;
const HINT_STEPS = [
  { position: 45, after: 620 },
  { position: 59, after: 620 },
  { position: REST_POSITION, after: 620 },
];

export function BeforeAfterSlider({ before, after }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(REST_POSITION);
  const [dragging, setDragging] = useState(false);
  const [hinting, setHinting] = useState(false);
  const touched = useRef(false);

  // Once the slider reaches the middle of the viewport, walk the handle
  // through a short up-down cycle so it reads as something you can drag.
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || touched.current) return;
        observer.disconnect();
        timers.push(setTimeout(() => setHinting(true), HINT_DELAY - 50));

        let elapsed = HINT_DELAY;
        HINT_STEPS.forEach((step) => {
          timers.push(
            setTimeout(() => {
              if (!touched.current) setPosition(step.position);
            }, elapsed),
          );
          elapsed += step.after;
        });
        timers.push(setTimeout(() => setHinting(false), elapsed));
      },
      { rootMargin: "-35% 0px -35% 0px" },
    );

    observer.observe(frame);
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  const positionFromEvent = useCallback((clientY: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const { top, height } = frame.getBoundingClientRect();
    setPosition(clamp(((clientY - top) / height) * 100));
  }, []);

  const stopHint = () => {
    touched.current = true;
    setHinting(false);
  };

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
        stopHint();
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
        className={cx(styles.BeforeLayer, hinting && styles.animating)}
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

      <div
        className={cx(styles.Divider, hinting && styles.animating)}
        style={{ top: `${position}%` }}
      >
        <button
          type="button"
          role="slider"
          aria-label={t("repairs.sliderLabel")}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={t("repairs.sliderValueText")}
          aria-orientation="vertical"
          onKeyDown={(event) => {
            stopHint();
            onKeyDown(event);
          }}
          className={styles.Handle}
        >
          <span className={styles.Grip} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
