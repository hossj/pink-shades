"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { t } from "@/lib/i18n";

import styles from "./MotorDemo.module.scss";

const FULL_TRAVEL_MS = 4500;

export function MotorDemo() {
  const [position, setPosition] = useState(62);
  const [displayPosition, setDisplayPosition] = useState(62);
  const [durationMs, setDurationMs] = useState(0);
  const shadeRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  const readPosition = () => {
    const shade = shadeRef.current;
    const track = shade?.parentElement;
    if (!shade || !track) return position;
    return (
      (shade.getBoundingClientRect().height /
        track.getBoundingClientRect().height) *
      100
    );
  };

  const stopTracking = () => cancelAnimationFrame(rafRef.current);

  const trackTowards = (target: number) => {
    const tick = () => {
      const current = readPosition();
      setDisplayPosition(Math.round(current));
      if (Math.abs(current - target) > 0.4) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayPosition(target);
      }
    };
    stopTracking();
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => stopTracking, []);

  const moveTo = (target: number) => {
    const current = readPosition();
    setDurationMs((Math.abs(target - current) / 100) * FULL_TRAVEL_MS);
    setPosition(target);
    trackTowards(target);
  };

  const stop = () => {
    stopTracking();
    const current = Math.round(readPosition());
    setDurationMs(0);
    setPosition(current);
    setDisplayPosition(current);
  };

  const daylight = (100 - position) / 100;
  const motion = {
    "--_duration": `${durationMs}ms`,
    "--_daylight": daylight,
  } as CSSProperties;

  return (
    <Section background="surface">
      <Container className={styles.Layout}>
        <Reveal className={styles.Copy}>
          <Eyebrow>{t("motorizationPage.demo.eyebrow")}</Eyebrow>
          <h2 className={styles.Title}>{t("motorizationPage.demo.title")}</h2>
          <p className={styles.Description}>
            {t("motorizationPage.demo.description")}
          </p>
        </Reveal>

        <Reveal className={styles.Stage} style={motion}>
          <div className={styles.WindowColumn}>
            <div className={styles.Window}>
              <div className={styles.View}>
                <div className={styles.Sun} />
                <div className={styles.Hills} />
              </div>
              <div className={styles.Track}>
                <div
                  ref={shadeRef}
                  className={styles.Shade}
                  style={{ height: `${position}%` }}
                >
                  <span className={styles.ShadeBar} />
                </div>
              </div>
              <div className={styles.Mullion} />
            </div>
            <div aria-hidden="true" className={styles.LightPool} />
            <p aria-live="polite" className={styles.Position}>
              {t("motorizationPage.demo.positionLabel")} — {displayPosition}%
            </p>
          </div>

          <div className={styles.Remote}>
            <button
              type="button"
              aria-label={t("motorizationPage.demo.open")}
              onClick={() => moveTo(0)}
              className={styles.RemoteButton}
            >
              <span aria-hidden="true" className={styles.ArrowUp} />
            </button>
            <button
              type="button"
              aria-label={t("motorizationPage.demo.stop")}
              onClick={stop}
              className={styles.RemoteButton}
            >
              <span aria-hidden="true" className={styles.StopSquare} />
            </button>
            <button
              type="button"
              aria-label={t("motorizationPage.demo.close")}
              onClick={() => moveTo(100)}
              className={styles.RemoteButton}
            >
              <span aria-hidden="true" className={styles.ArrowDown} />
            </button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
