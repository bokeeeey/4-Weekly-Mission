import {
  WhiteFacebookIcon,
  WhiteYoutubeIcon,
  WhiteTwitterIcon,
  WhiteInstagramIcon,
} from "@/src/asset/";
import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.codeit}>©codeit - 2024</p>
      <div className={styles.linkBox}>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">FAQ</Link>
      </div>
      <ul className={styles.snsBox}>
        <li>
          <WhiteFacebookIcon />
        </li>
        <li>
          <WhiteTwitterIcon />
        </li>
        <li>
          <WhiteYoutubeIcon />
        </li>
        <li>
          <WhiteInstagramIcon />
        </li>
      </ul>
    </footer>
  );
}
