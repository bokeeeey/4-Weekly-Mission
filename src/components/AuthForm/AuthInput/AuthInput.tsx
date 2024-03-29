"use client";
import styles from "./AuthInput.module.scss";
import EyeIcon from "@/src/asset/svg/EyeIcon";
import { useState } from "react";

interface AuthInput {
  placeholder: string;
  type: string;
}

export default function AuthInput({ placeholder, type = "text" }: AuthInput) {
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isType, setIsType] = useState(`${type}`);

  const handleEyeIconClick = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);

    if (isVisible) {
      setIsType(`${type}`);
    } else {
      setIsType("text");
    }
  };

  const className = isError ? styles.errorState : null;

  const errorMessage =
    type === "email"
      ? "이메일 에러 메세지"
      : type === "password"
      ? "비밀번호 에러 메세지"
      : "비밀번호 확인 에러 메세지";

  return (
    <div className={styles.AuthInput}>
      <input
        className={`${styles.input} ${className}`}
        placeholder={placeholder}
        required
        type={isType}
      />
      {isError && <span className={styles.errorMassage}>{errorMessage}</span>}
      {type === "password" && (
        <div className={styles.EyeIcon}>
          <EyeIcon
            visible={isVisible}
            handleEyeIconClick={handleEyeIconClick}
          />
        </div>
      )}
    </div>
  );
}
