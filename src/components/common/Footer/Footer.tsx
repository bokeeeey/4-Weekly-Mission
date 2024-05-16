import classNames from "classnames/bind";
import Link from "next/link";
import { ROUTER, SNS_LINK } from "../../../constants";
import { Ic_Facebook, Ic_Instagram, Ic_Twitter, Ic_Youtube } from "@/public";

import styles from "./Footer.module.scss";

const cn = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cn("footer")}>
      <p className={cn("codeit")}>©codeit - 2024</p>
      <div className={cn("linkBox")}>
        <Link href={ROUTER.HOME}>Privacy Policy</Link>
        <Link href={ROUTER.HOME}>FAQ</Link>
      </div>
      <ul className={cn("snsBox")}>
        <li>
          <a href={SNS_LINK.FACEBOOK} target="_blank">
            <Ic_Facebook />
          </a>
        </li>
        <li>
          <a href={SNS_LINK.TWITTER} target="_blank">
            <Ic_Twitter />
          </a>
        </li>
        <li>
          <a href={SNS_LINK.YOUTUBE} target="_blank">
            <Ic_Youtube />
          </a>
        </li>
        <li>
          <a href={SNS_LINK.INSTAGRAM} target="_blank">
            <Ic_Instagram />
          </a>
        </li>
      </ul>
    </footer>
  );
}
