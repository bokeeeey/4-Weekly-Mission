import AuthInput from "@/src/components/AuthForm/AuthInput/AuthInput";

export default function Home() {
  return (
    <>
      홈페이지 입니다
      <div>
        <AuthInput placeholder={"인풋입니다"} type="password" />
      </div>
    </>
  );
}
