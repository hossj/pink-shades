import en from "@/locales/en.json";

type Flatten<T, Prefix extends string = ""> = {
  [K in keyof T & string]: T[K] extends object
    ? Flatten<T[K], `${Prefix}${K}.`>
    : `${Prefix}${K}`;
}[keyof T & string];

export type TranslationKey = Flatten<typeof en>;

function get(obj: Record<string, unknown>, path: string): string {
  const value = path
    .split(".")
    .reduce<unknown>(
      (acc, key) =>
        acc && typeof acc === "object"
          ? (acc as Record<string, unknown>)[key]
          : undefined,
      obj,
    );
  return typeof value === "string" ? value : path;
}

export function t(key: TranslationKey): string {
  return get(en as Record<string, unknown>, key);
}
