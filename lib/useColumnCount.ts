"use client";

import { useEffect, useState } from "react";

export function useColumnCount() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const queries = [
      window.matchMedia("(max-width: 767px)"),
      window.matchMedia("(max-width: 1199px)"),
    ];
    const update = () =>
      setColumns(queries[0].matches ? 1 : queries[1].matches ? 2 : 3);
    update();
    queries.forEach((query) => query.addEventListener("change", update));
    return () =>
      queries.forEach((query) => query.removeEventListener("change", update));
  }, []);

  return columns;
}
