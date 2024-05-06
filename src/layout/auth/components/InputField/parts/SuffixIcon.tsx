import classNames from "classnames/bind";
import { Ic_Eye_Off, Ic_Eye_On } from "@/public";
import { InputHTMLAttributes } from "react";

import styles from "./SuffixIcon.module.scss";

const cn = classNames.bind(styles);

interface SuffixIconProps extends InputHTMLAttributes<HTMLInputElement> {
  onClick: () => void;
}

export default function SuffixIcon({ type, onClick }: SuffixIconProps) {
  return (
    <div className={cn("suffixIcon")} onClick={onClick}>
      {type === "password" ? <Ic_Eye_Off /> : <Ic_Eye_On />}
    </div>
  );
}
