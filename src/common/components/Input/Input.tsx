import classNames from "classnames/bind";
import { InputHTMLAttributes, forwardRef } from "react";

import styles from "./Input.module.scss";

const cn = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { isError, ...rest },
  ref
) {
  return (
    <input className={cn("default", { red: isError })} ref={ref} {...rest} />
  );
});
