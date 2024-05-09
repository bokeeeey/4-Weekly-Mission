import classNames from "classnames/bind";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postSignIn } from "@/src/common/apis";
import InputField from "./InputField/InputField";

import styles from "./AuthForm.module.scss";

const cn = classNames.bind(styles);

const regExpEm =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export default function SignInForm() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: postSignIn,
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
    loginMutation.mutate(payload, {
      onSuccess: (response) => {
        // console.log("로그인 성공", response);
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
      },
      onError: (error) => {
        // console.error("mutate 실패", error);
        setError("email", { message: "이메일을 확인해 주세요" });
        setError("password", { message: "비밀번호를 확인해 주세요" });
      },
    });
    setValue("password", "");
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
        })}
      />
      <InputField
        id="password"
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해 주세요"
        suffixIcon
        errorMessage={errors.password?.message}
        {...register("password", {
          required: "비밀번호를 입력해 주세요",
        })}
      />
      <button className={cn("button")} type="submit">
        로그인
      </button>
    </form>
  );
}
