import { LinkbraryIcon } from "@/src/asset";
import Link from "next/link";
import styles from "./SignInForm.module.scss";

export default function SignInForm() {
  return (
    <div className={styles.signForm}>
      <div className={styles.logoBox}>
        <Link href="/">
          <LinkbraryIcon width="212" height="38" />
        </Link>
        <div className={styles.logoBox__text}>
          <p>회원이 아니신가요?</p>
          <Link href="/signup">회원 가입하기</Link>
        </div>
      </div>
      <form className={styles.form}>
        <div className={styles.inputBox}>
          <label htmlFor="email">이메일</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="password">비밀번호</label>
          <input type="password" name="password" />
        </div>
        <button>로그인</button>
      </form>
    </div>
  );
}
