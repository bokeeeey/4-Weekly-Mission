import classNames from "classnames/bind";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import InputField from "./InputField/InputField";
import { checkEmail, postSignUp } from "@/src/common/apis";

import styles from "./AuthForm.module.scss";

const cn = classNames.bind(styles);

const regExpEm =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const regExgPw = /^[A-Za-z0-9]{8,20}$/;

export default function SignUpForm() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      passwordValidate: "",
    },
  });

  const confirmEmail = useMutation({
    mutationFn: checkEmail,
  });

  const signUpMutation = useMutation({
    mutationFn: postSignUp,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["accessToken"],
      });
      queryClient.invalidateQueries({
        queryKey: ["refreshToken"],
      });
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (payload) => {
    console.log(payload);
    signUpMutation.mutate(payload, {
      onSuccess: (response) => {
        // console.log("회원가입 성공", response);
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
      },
      onError: () => {
        setError("email", { message: "이메일을 확인해 주세요" });
        setError("password", { message: "비밀번호를 확인해 주세요" });
        setError("passwordValidate", { message: "비밀번호를 확인해 주세요" });
      },
    });
  };

  return (
    <form className={cn("form")} onSubmit={handleSubmit(onSubmit)}>
      <InputField
        id="email"
        label="이메일"
        type="email"
        placeholder="이메일을 입력해 주세요"
        errorMessage={errors.email?.message}
        {...register("email", {
          required: "이메일을 입력해 주세요",
          pattern: {
            value: regExpEm,
            message: "올바른 이메일 주소가 아닙니다",
          },
          onBlur: (e) => {
            const emailValue = e.target.value;
            confirmEmail.mutate(emailValue, {
              onSuccess: (response) => {
                if (!response.ok) {
                  setError("email", { message: response.message });
                }
              },
            });
          },
        })}
      />
      <InputField
        id="password"
        label="비밀번호"
        type="password"
        placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요"
        suffixIcon
        errorMessage={errors.password?.message}
        {...register("password", {
          required: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요",
          pattern: {
            value: regExgPw,
            message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요",
          },
        })}
      />
      <InputField
        id="passwordValidate"
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호와 일치하는 값을 입력해 주세요"
        suffixIcon
        errorMessage={errors.passwordValidate?.message}
        {...register("passwordValidate", {
          required: "비밀번호와 일치하는 값을 입력해 주세요",
          validate: (value) => {
            if (watch("password") !== value) {
              return "비밀번호가 일치하지 않아요";
            }
          },
        })}
      />
      <button className={cn("button")} type="submit" disabled={!isValid}>
        회원가입
      </button>
    </form>
  );
}
