import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

import { Ic_Logo } from "@/public";
import { getElapsedTime, getFormattedDate, getValidUrl } from "@/src/utils";
import type { TLink } from "@/src/types/type";

import styles from "./LinkOverview.module.scss";

const cn = classNames.bind(styles);

interface LinkOverviewProps {
  linkData: TLink;
}

export default function LinkOverview({ linkData }: LinkOverviewProps) {
  const {
    imageSource: imageUrl,
    createdAt,
    description,
    title,
    url,
  } = linkData;
  const createDate = getElapsedTime(createdAt);
  const formatDate = getFormattedDate(createdAt);

  // 서버 Image-url이 문제가 있어서 그냥 null처리 했읍니다
  const imageSource = getValidUrl(imageUrl);

  return (
    <Link href={url} className={cn("LinkOverview")} target="_blank">
      {imageSource ? (
        <figure className={cn("imgBox")}>
          <Image width={340} height={200} src={imageSource} alt={title} />
        </figure>
      ) : (
        <figure className={cn("emptyCaseBox")}>
          <Ic_Logo width="133" height="24" />
        </figure>
      )}
      <div className={cn("caption")}>
        <time className={cn("updatedAt")} dateTime={createdAt}>
          {createDate}
        </time>
        <p className={cn("description")}>{description}</p>
        <time className={cn("createdAt")} dateTime={createdAt}>
          {formatDate}
        </time>
      </div>
    </Link>
  );
}
