import classNames from "classnames/bind";
import { Ic_Google, Ic_Talk } from "@/public";
import { SNS_LINK } from "@/src/common/constants";

import styles from "./LinkBox.module.scss";

const cn = classNames.bind(styles);

interface LinkBoxProps {
  text: string;
}

export default function LinkBox({ text }: LinkBoxProps) {
  return (
    <article className={cn("linkBox")}>
      <p className={cn("text")}>{text}</p>
      <ul className={cn("snsBox")}>
        <a href={SNS_LINK.GOOGLE}>
          <li className={cn("google")}>
            <Ic_Google />
          </li>
        </a>
        <a href={SNS_LINK.KAKAO}>
          <li className={cn("kakao")}>
            <Ic_Talk />
          </li>
        </a>
      </ul>
    </article>
  );
}
