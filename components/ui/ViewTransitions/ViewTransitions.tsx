"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

function waitForScrollTop(maxWait = 900) {
  return new Promise<void>((resolve) => {
    if (window.scrollY <= 1) {
      resolve();
      return;
    }
    const timeout = window.setTimeout(finish, maxWait);
    function finish() {
      window.clearTimeout(timeout);
      window.removeEventListener("scrollend", onScrollEnd);
      resolve();
    }
    function onScrollEnd() {
      if (window.scrollY <= 1) finish();
    }
    window.addEventListener("scrollend", onScrollEnd);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

export function ViewTransitions({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const pendingRef = useRef<(() => void) | null>(null);
  const busyRef = useRef(false);

  useEffect(() => {
    pendingRef.current?.();
    pendingRef.current = null;
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/") || href.includes("#")) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (href === window.location.pathname) return;

      if (!document.startViewTransition) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (busyRef.current) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      busyRef.current = true;

      waitForScrollTop().then(() => {
        document.documentElement.classList.add("vt-active");
        const transition = document.startViewTransition(
          () =>
            new Promise<void>((resolve) => {
              pendingRef.current = resolve;
              router.push(href);
            }),
        );
        transition.finished.finally(() => {
          document.documentElement.classList.remove("vt-active");
          busyRef.current = false;
        });
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return children;
}
