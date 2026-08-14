"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cx } from "@/lib/cx";
import { t, type TranslationKey } from "@/lib/i18n";

import styles from "./FilterTabs.module.scss";

export interface FilterTab {
  id: string;
  labelKey: TranslationKey;
  count?: number;
}

interface Props {
  tabs: FilterTab[];
  active: string;
  onChange: (id: string) => void;
  className?: string;
}

export function FilterTabs({ tabs, active, onChange, className }: Props) {
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());
  const [pill, setPill] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    ready: false,
  });

  const movePill = useCallback((id: string) => {
    const tab = tabRefs.current.get(id);
    if (!tab) return;
    setPill({
      left: tab.offsetLeft,
      top: tab.offsetTop,
      width: tab.offsetWidth,
      height: tab.offsetHeight,
      ready: true,
    });
  }, []);

  useEffect(() => {
    movePill(active);
    const onResize = () => movePill(active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, movePill]);

  return (
    <div role="tablist" className={cx(styles.Tabs, className)}>
      <span
        aria-hidden="true"
        className={cx(styles.Pill, pill.ready && styles.pillReady)}
        style={{
          transform: `translate(${pill.left}px, ${pill.top}px)`,
          width: pill.width,
          height: pill.height,
        }}
      />
      {tabs.map((tab) => (
        <button
          key={tab.id}
          ref={(el) => {
            if (el) tabRefs.current.set(tab.id, el);
          }}
          type="button"
          role="tab"
          aria-selected={tab.id === active}
          onClick={() => onChange(tab.id)}
          className={cx(styles.Tab, tab.id === active && styles.active)}
        >
          {t(tab.labelKey)}
          {tab.count !== undefined && (
            <span className={styles.Count}>{tab.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}
