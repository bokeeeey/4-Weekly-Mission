"use client";

import InputField from "./InputField/InputField";

export default function Auth() {
  return (
    <form>
      <InputField type="email" name="email" />
      <InputField type="password" name="password" icon="eyeToggle" />
    </form>
  );
}
