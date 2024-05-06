import classNames from "classnames/bind";
import { InputHTMLAttributes, forwardRef } from "react";
import { Input } from "@/src/common/components";
import Label from "./parts/Label";

import styles from "./InputField.module.scss";

const cn = classNames.bind(styles);

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export default forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField({ id, label, type, errorMessage, ...rest }, ref) {
    return (
      <div className={cn("inputField")}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <Input
          ref={ref}
          id={id}
          isError={!!errorMessage}
          type={type}
          {...rest}
        />
        {errorMessage && <span className={cn("error")}>{errorMessage}</span>}
      </div>
    );
  }
);
