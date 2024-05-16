import classNames from "classnames/bind";
import Link from "next/link";
import { Ic_Logo } from "@/public";
import { ROUTER } from "@/src/constants";
import { Profile } from "./parts";

import type { User } from "@/src/types/type";

import styles from "./GNB.module.scss";

const cn = classNames.bind(styles);

interface GNBProps {
  userData?: User[];
}

export default function GNB({ userData }: GNBProps) {
  return (
    <nav className={cn("gnb")}>
      <section className={cn("gnbBox")}>
        <Link href={ROUTER.HOME}>
          <Ic_Logo />
        </Link>
        {userData ? (
          <Profile userData={userData} />
        ) : (
          <Link href={ROUTER.SIGN_IN}>
            <button type="button" className={cn("button")}>
              로그인
            </button>
          </Link>
        )}
      </section>
    </nav>
  );
}
