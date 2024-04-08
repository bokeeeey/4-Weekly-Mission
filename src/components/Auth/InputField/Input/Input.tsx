import { ChangeEvent, FocusEventHandler } from "react";
import styles from "./Input.module.scss";

interface Input {
  className: string;
  type: string;
  name: string;
  value: any;
  onValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onInputFocus: FocusEventHandler;
  onInputBlur: FocusEventHandler;
  placeholder?: string;
}

export default function Input({
  className,
  onValueChange,
  placeholder,
  onInputBlur,
  onInputFocus,
  ...rest
}: Input) {
  return (
    <input
      className={`${styles.input} ${styles[className]}`}
      placeholder={placeholder}
      onChange={onValueChange}
      onBlur={onInputBlur}
      onFocus={onInputFocus}
      {...rest}
    />
  );
}
