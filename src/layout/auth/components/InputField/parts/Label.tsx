import { LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export default function Label({ htmlFor, children }: LabelProps) {
  return <label htmlFor={htmlFor}>{children}</label>;
}
