import classNames from "classnames/bind";
import { LabelHTMLAttributes, ReactNode } from "react";

import styles from "./Label.module.scss";

const cn = classNames.bind(styles);

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label className={cn("label")} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
