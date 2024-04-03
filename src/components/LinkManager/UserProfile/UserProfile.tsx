import Image from "next/image";
import styles from "./UserProfile.module.scss";
import { UserProfile as TUserProfile } from "@/src/constants/types";

interface UserProfileProps {
  userProfile: TUserProfile;
}

export default function UserProfile({ userProfile }: UserProfileProps) {
  const { name, owner } = userProfile;

  return (
    <section className={styles.UserProfile}>
      <article className={styles.profileInfos}>
        <Image
          className={styles.profileImg}
          src={owner.profileImageSource}
          width={60}
          height={60}
          alt="user profile image"
        />
        <p className={styles.profileName}>{owner.name}</p>
        <span className={styles.folderName}>{name}</span>
      </article>
    </section>
  );
}
