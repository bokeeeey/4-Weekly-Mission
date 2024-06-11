import Link from "next/link";
import { LinkbraryIcon } from "@/src/asset";
import styles from "./Header.module.scss";
import { END_POINT } from "@/src/constants";
import Image from "next/image";
import { useFetchData } from "@/src/hooks/useFetchData";

export default async function Header() {
  const userData = await useFetchData(END_POINT.USER);
  const { image_source, email } = userData.data[0];

  return (
    <header className={styles.header}>
      <nav className={styles.headerBox}>
        <Link href="/">
          <LinkbraryIcon width="133" height="24" />
        </Link>
        {userData ? (
          <section className={styles.profileBox}>
            <Image
              className={styles.profileBox__img}
              src={image_source}
              width={28}
              height={28}
              alt="user profile"
            />
            <p className={styles.profileBox__email}>{email}</p>
          </section>
        ) : (
          <button className={styles.loginBtn}>로그인</button>
        )}
      </nav>
    </header>
  );
}
