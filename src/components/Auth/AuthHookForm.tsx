"use client";
import { useForm } from "react-hook-form";

export default function AuthHookForm() {
  const { handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit}>
      <input />
    </form>
  );
}
