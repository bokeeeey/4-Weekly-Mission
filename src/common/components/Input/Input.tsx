import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref
) {
  return <input ref={ref} {...props} />;
});
