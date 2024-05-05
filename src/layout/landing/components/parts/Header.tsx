import classNames from "classnames/bind";
import Image from "next/image";
import { Img_Example } from "@/public";

import styles from "./Header.module.scss";
import Link from "next/link";
import { ROUTER } from "@/src/common/constants";

const cn = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cn("header")}>
      <h1 className={cn("text")}>
        <span className={cn("textGradient")}>세상의 모든 정보</span>를<br />
        쉽게 저장하고 관리해 보세요
      </h1>
      <Link href={ROUTER.SIGN_UP}>
        <button className={cn("button")}>링크 추가하기</button>
      </Link>
      <figure>
        <Image
          src={Img_Example}
          alt="예시이미지"
          style={{ objectFit: "contain" }}
          placeholder="blur"
        />
      </figure>
    </header>
  );
}
