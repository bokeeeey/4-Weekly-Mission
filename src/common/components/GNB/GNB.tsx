import classNames from "classnames/bind";
import Link from "next/link";
import { Ic_Logo } from "@/public";
import { ROUTER } from "@/src/common/constants";

import styles from "./GNB.module.scss";

const cn = classNames.bind(styles);

export default function GNB() {
  return (
    <nav className={cn("gnb")}>
      <section className={cn("gnbBox")}>
        <Link href={ROUTER.HOME}>
          <Ic_Logo />
        </Link>
        <Link href={ROUTER.SIGN_IN}>
          <button type="button" className={cn("button")}>
            로그인
          </button>
        </Link>
      </section>
    </nav>
  );
}
