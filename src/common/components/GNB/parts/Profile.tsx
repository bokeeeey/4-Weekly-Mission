import classNames from "classnames/bind";
import Image from "next/image";
import type { User } from "@/src/common/constants/type";

import styles from "./Profile.module.scss";

const cn = classNames.bind(styles);

interface ProfileProps {
  userData: User[];
}

export default function Profile({ userData }: ProfileProps) {
  const { image_source, email } = userData[0];

  return (
    <article className={cn("profile")}>
      <Image
        src={image_source}
        alt="프로필"
        width={28}
        height={28}
        style={{ borderRadius: "9999px" }}
      />
      <p>{email}</p>
    </article>
  );
}
