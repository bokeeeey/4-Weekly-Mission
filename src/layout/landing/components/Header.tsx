import classNames from "classnames/bind";
import Image from "next/image";
import { Img_example } from "@/public";
import styles from "./Header.module.scss";

const cn = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cn("header")}>
      <h1>
        <span>세상의 모든 정보</span>를 쉽게 저장하고 관리해 보세요
      </h1>
      <button>링크 추가하기</button>
      <figure>
        <Image
          src={Img_example}
          alt="예시이미지"
          fill
          style={{ objectFit: "contain" }}
          placeholder="blur"
        />
      </figure>
    </header>
  );
}
