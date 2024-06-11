// "use client";
import { ChangeEvent, useState } from "react";
import { EyeOffIcon, EyeOnIcon } from "@/src/asset";
import Input from "./Input/Input";
import styles from "./InputField.module.scss";

interface InputField {
  type: string;
  name: string;
  icon?: string;
  isError?: boolean;
  placeholder?: string;
  label?: boolean;
}

export default function InputField({
  type,
  name,
  icon,
  placeholder,
  label,
  isError = false,
}: InputField) {
  const [inputType, setInputType] = useState(type);
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [borderColor, setBorderColor] = useState("default");

  const handleEyesClick = () => {
    setIsVisible((prevVisible) => !prevVisible);

    if (!isVisible) {
      setInputType("text");
      return;
    }
    setInputType(type);
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    if (borderColor === "error") {
      return;
    }

    setBorderColor("focus");
  };

  const handleInputBlur = () => {
    if (inputValue === "") {
      setBorderColor("error");
      return;
    }

    setBorderColor("default");
  };

  const eyeToggleIcon = isVisible ? <EyeOnIcon /> : <EyeOffIcon />;

  return (
    <div className={styles.inputField}>
      <label>{name}</label>
      <Input
        className={borderColor}
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onValueChange={handleValueChange}
        onInputBlur={handleInputBlur}
        onInputFocus={handleInputFocus}
      />
      {/* {isError && <span className={styles.errorMessage}>{errorMessage}</span>} */}
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
