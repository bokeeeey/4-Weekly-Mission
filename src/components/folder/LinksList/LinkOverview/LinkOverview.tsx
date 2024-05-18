import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@nextui-org/skeleton";

import { Ic_Logo } from "@/public";
import { getElapsedTime, getFormattedDate, getValidUrl } from "@/src/utils";
import type { TLink } from "@/src/types/type";

import styles from "./LinkOverview.module.scss";

const cn = classNames.bind(styles);

interface LinkOverviewProps {
  link: TLink;
}

export default function LinkOverview({ link }: LinkOverviewProps) {
  const { image_source: imageUrl, created_at, description, title, url } = link;
  const createDate = getElapsedTime(created_at);
  const formatDate = getFormattedDate(created_at);

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
        <time className={cn("updatedAt")} dateTime={created_at}>
          {createDate}
        </time>
        <p className={cn("description")}>{description}</p>
        <time className={cn("createdAt")} dateTime={created_at}>
          {formatDate}
        </time>
      </div>
    </Link>
  );
}
