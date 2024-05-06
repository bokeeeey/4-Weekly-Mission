import classNames from "classnames/bind";
import InputField from "./InputField/InputField";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import styles from "./AuthForm.module.scss";

const cn = classNames.bind(styles);

const regExpEm =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
// const regExgPw = /^[A-Za-z0-9]{6,12}$/;

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (payload) => {
    console.log(payload);
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
