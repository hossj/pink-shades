import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CallToAction, ProductDetail } from "@/components/sections";
import { PageHero } from "@/components/ui/PageHero";
import { type ProductId, productDetails } from "@/content/productDetails";
import { productItems } from "@/content/products";
import { t } from "@/lib/i18n";

interface Props {
  params: Promise<{ slug: string }>;
}

function productIdFromSlug(slug: string): ProductId | undefined {
  return (Object.keys(productDetails) as ProductId[]).find(
    (id) => productDetails[id].slug === slug,
  );
}

export function generateStaticParams() {
  return Object.values(productDetails).map((detail) => ({
    slug: detail.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const productId = productIdFromSlug(slug);
  if (!productId) return {};
  const item = productItems.find((entry) => entry.id === productId);
  const detail = productDetails[productId];
  const introKey = detail.introKeys[0];
  return {
    title: `${t(item!.nameKey)} | ${t("site.name")}`,
    ...(introKey ? { description: t(introKey) } : {}),
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const productId = productIdFromSlug(slug);
  if (!productId) notFound();

  const item = productItems.find((entry) => entry.id === productId)!;

  return (
    <main>
      <PageHero
        slim
        breadcrumbs={[
          { labelKey: "common.home", href: "/" },
          { labelKey: "nav.products", href: "/products" },
          { labelKey: item.nameKey },
        ]}
      />
      <ProductDetail productId={productId} />
      <CallToAction />
    </main>
  );
}
