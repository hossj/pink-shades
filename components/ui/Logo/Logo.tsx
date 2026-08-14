import Image from "next/image";

import { t } from "@/lib/i18n";

const RATIO = 350 / 188;

interface Props {
  height?: number;
  className?: string;
  priority?: boolean;
}

export function Logo({ height = 58, className, priority = false }: Props) {
  return (
    <Image
      src="/images/logo.svg"
      alt={t("site.name")}
      height={height}
      width={Math.round(height * RATIO)}
      className={className}
      priority={priority}
    />
  );
}
