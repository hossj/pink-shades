"use client";

import type { ElementType, HTMLAttributes } from "react";
import { useEffect, useRef, useState } from "react";

import { cx } from "@/lib/cx";

import styles from "./Reveal.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Reveal({ as: Tag = "div", className, children, ...props }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (element.getBoundingClientRect().top < window.innerHeight) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cx(styles.Reveal, visible && styles.visible, className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
