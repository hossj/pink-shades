"use client";

import { Button, type ButtonProps } from "@/components/ui/Button";

import { useEstimate } from "./EstimateProvider";

type Props = Omit<Extract<ButtonProps, { href?: undefined }>, "onClick">;

export function EstimateButton(props: Props) {
  const { openEstimate } = useEstimate();

  return <Button type="button" onClick={openEstimate} {...props} />;
}
