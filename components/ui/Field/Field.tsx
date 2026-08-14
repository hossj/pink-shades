import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

import { cx } from "@/lib/cx";

import styles from "./Field.module.scss";

interface FieldProps {
  label: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}

export function Field({ label, hint, className, children }: FieldProps) {
  return (
    <label className={cx(styles.Field, className)}>
      <span className={styles.Label}>
        <span>{label}</span>
        {hint && <span className={styles.Hint}>{hint}</span>}
      </span>
      {children}
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cx(styles.Control, props.className)} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cx(styles.Control, props.className)} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cx(styles.Control, styles.Textarea, props.className)}
    />
  );
}
