import Link from "next/link";
import styles from "./LinkOverview.module.scss";
import { Link as TLink } from "@/src/constants/types";
import getElapsedTime from "@/src/utils/getElapsedTime";
import getFormattedDate from "@/src/utils/getFormattedDate";
import { LinkbraryIcon } from "@/src/asset/";
import Image from "next/image";
import getValidUrl from "@/src/utils/getValidUrl";

interface LinkOverview {
  link: TLink;
}

export default function LinkOverview({ link }: LinkOverview) {
  const { imageSource: imageUrl, createdAt, description, title, url } = link;
  const createDate = getElapsedTime(createdAt);
  const formatDate = getFormattedDate(createdAt);

  // 서버 Image-url이 문제가 있어서 그냥 null처리 했읍니다
  const imageSource = getValidUrl(imageUrl);

  return (
    <Link href={url} className={styles.LinkOverview} target="_blank">
      {imageSource ? (
        <figure className={styles.imgBox}>
          <Image width={340} height={200} src={imageSource} alt={title} />
        </figure>
      ) : (
        <figure className={styles.emptyCaseBox}>
          <LinkbraryIcon width="133" height="24" opacity="0.2" />
        </figure>
      )}
      <div className={styles.caption}>
        <time className={styles.updatedAt} dateTime={createdAt}>
          {createDate}
        </time>
        <p className={styles.description}>{description}</p>
        <time className={styles.createdAt} dateTime={createdAt}>
          {formatDate}
        </time>
      </div>
    </Link>
  );
}
