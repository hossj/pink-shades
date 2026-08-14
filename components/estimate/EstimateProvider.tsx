"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

interface EstimateContextValue {
  open: boolean;
  note: string;
  openEstimate: (note?: string) => void;
  closeEstimate: () => void;
}

const EstimateContext = createContext<EstimateContextValue | null>(null);

export function EstimateProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");

  const openEstimate = useCallback((nextNote?: string) => {
    setNote(nextNote ?? "");
    setOpen(true);
  }, []);
  const closeEstimate = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, note, openEstimate, closeEstimate }),
    [open, note, openEstimate, closeEstimate],
  );

  return (
    <EstimateContext.Provider value={value}>{children}</EstimateContext.Provider>
  );
}

export function useEstimate() {
  const context = useContext(EstimateContext);
  if (!context) {
    throw new Error("useEstimate must be used within an EstimateProvider");
  }
  return context;
}
