import classNames from "classnames/bind";
import Image from "next/image";
import type { User } from "@/src/types/type";

import styles from "./UserProfile.module.scss";

const cn = classNames.bind(styles);

interface UserProfileProps {
  userData: User[];
}

export default function UserProfile({ userData }: UserProfileProps) {
  const { id, image_source, email, name } = userData[0];

  return (
    <section className={styles.UserProfile}>
      <article className={styles.profileInfos}>
        <Image
          className={styles.profileImg}
          src={image_source}
          width={60}
          height={60}
          alt="user profile image"
        />
        <p className={styles.profileName}>{email}</p>
        <span className={styles.folderName}>{name}</span>
      </article>
    </section>
  );
}
