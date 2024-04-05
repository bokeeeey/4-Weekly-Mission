// "use client";
import { useState } from "react";
import Input from "./Input/Input";
import styles from "./InputField.module.scss";
import EyeOnIcon from "@/src/asset/svg/EyeOnIcon";
import EyeOffIcon from "@/src/asset/svg/EyeOffIcon";

interface InputField {
  type: string;
  name: string;
  icon?: string;
  isError?: boolean;
}

export default function InputField({
  type,
  name,
  icon,
  isError = false,
}: InputField) {
  const [inputType, setInputType] = useState(type);
  const [isVisible, setIsVisible] = useState(false);

  const handleEyesClick = () => {
    setIsVisible((prevVisible) => !prevVisible);

    if (!isVisible) {
      setInputType("text");
      return;
    }
    setInputType(type);
  };

  const errorState = isError ? "error" : "";
  const eyeToggleIcon = isVisible ? <EyeOnIcon /> : <EyeOffIcon />;
  const errorMessage =
    name === "email"
      ? "이메일을 입력해 주세요"
      : name === "password"
      ? "비밀번호를 입력해 주세요"
      : "";

  // type={} name={}: 이게 key값인것이다  defaultValue={}: 기본값을 설정해야 하는것이다 unit={}: icon 유무를 표현할수 있어야 하는ㄱㅓㅅ이다 {...rest} 대충 내려줄거?
  return (
    <div className={styles.inputField}>
      <Input className={errorState} type={inputType} name={name} />
      {isError && <span className={styles.errorMessage}>{errorMessage}</span>}
      {icon === "eyeToggle" && (
        <button
          type="button"
          className={styles.eyeToggleButton}
          onClick={handleEyesClick}
        >
          {eyeToggleIcon}
        </button>
      )}
    </div>
  );
}
