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
          <a href="https://www.facebook.com" target="_blank">
            <WhiteFacebookIcon />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank">
            <WhiteTwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank">
            <WhiteYoutubeIcon />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank">
            <WhiteInstagramIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}
