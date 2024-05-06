import classNames from "classnames/bind";
import { InputHTMLAttributes, forwardRef, useState } from "react";
import { Input } from "@/src/common/components";
import { Label, SuffixIcon } from "./index";

import styles from "./InputField.module.scss";

const cn = classNames.bind(styles);

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  suffixIcon?: boolean;
}

export default forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    { id, label, type, errorMessage, suffixIcon, ...rest },
    ref
  ) {
    const [inputType, setInputType] = useState(type);

    const onSuffixIconClick = () => {
      if (inputType === "password") {
        setInputType("text");
        return;
      }

      setInputType("password");
    };

    return (
      <div className={cn("inputField")}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <Input
          ref={ref}
          id={id}
          isError={!!errorMessage}
          type={inputType}
          {...rest}
        />
        {suffixIcon && type === "password" && (
          <SuffixIcon type={inputType} onClick={onSuffixIconClick} />
        )}
        {errorMessage && <span className={cn("error")}>{errorMessage}</span>}
      </div>
    );
  }
);
