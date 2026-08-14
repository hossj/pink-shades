import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

function Icon({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Icon strokeWidth={2} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </Icon>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 10 L12 3 L21 10" />
      <path d="M5 9 V20 H19 V9" />
      <path d="M12 16.5 C10 14.5 8.5 13 10.2 11.6 C11 11 12 11.4 12 12.2 C12 11.4 13 11 13.8 11.6 C15.5 13 14 14.5 12 16.5 Z" />
    </Icon>
  );
}

export function RulerIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 L12 21" />
      <path d="M12 3 L8 7 M12 3 L16 7 M12 21 L8 17 M12 21 L16 17" />
      <line x1="4" y1="12" x2="20" y2="12" strokeDasharray="2 3" />
    </Icon>
  );
}

export function DeliveryIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 3.5 H20 V7 L13 12 V19.5 L11 21 V12 L4 7 Z" />
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon strokeWidth={1.6} {...props}>
      <path d="M6 6 L18 18 M18 6 L6 18" />
    </Icon>
  );
}
