"use client";

import InputField from "./InputField/InputField";

export default function Auth() {
  const emailDefaultValue = "이메일을 입력해 주세요";
  const passwordDefaultValue = "비밀번호를 입력해 주세요";

  // isInvalid, focusBorderColor, errorBorderColor
  return (
    <form>
      <InputField type="email" name="email" placeholder={emailDefaultValue} />
      <br />
      <InputField
        type="password"
        name="password"
        icon="eyeToggle"
        placeholder={passwordDefaultValue}
      />
      <button type="submit">test</button>
    </form>
  );
}
