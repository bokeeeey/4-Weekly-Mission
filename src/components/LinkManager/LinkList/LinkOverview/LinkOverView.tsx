import Link from "next/link";
import styles from "./LinkOverview.module.scss";
import { Link as LinkType } from "@/src/constants/types";
import getElapsedTime from "@/src/utils/getElapsedTime";
import getFormattedDate from "@/src/utils/getFormattedDate";
import { LinkImageEmptyCase } from "@/src/asset/";
import Image from "next/image";

interface LinkOverview {
  link: LinkType;
}

export default function LinkOverview({ link }: LinkOverview) {
  const { imageSource: imageUrl, createdAt, description, title, url } = link;
  const createDate = getElapsedTime(createdAt);
  const formatDate = getFormattedDate(createdAt);

  // 서버 Image-url이 문제가 있어서 그냥 null처리 했읍니다
  function fixedUrl(url: string) {
    if (!url) return null;

    if (url.startsWith(`https:`)) {
      return url;
    } else {
      return null;
    }
  }

  const imageSource = fixedUrl(imageUrl);

  return (
    <Link href={url} className={styles.LinkOverview}>
      {imageSource ? (
        <figure className={styles.imgBox}>
          <Image width={340} height={200} src={imageSource} alt={title} />
        </figure>
      ) : (
        <figure className={styles.emptyCaseBox}>
          <LinkImageEmptyCase />
        </figure>
      )}
      <figcaption className={styles.caption}>
        <time className={styles.updatedAt}>{createDate}</time>
        <p className={styles.description}>{description}</p>
        <time className={styles.createdAt}>{formatDate}</time>
      </figcaption>
    </Link>
  );
}
