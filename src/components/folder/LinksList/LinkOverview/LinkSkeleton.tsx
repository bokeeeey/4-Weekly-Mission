import classNames from "classnames/bind";
import { Skeleton } from "@nextui-org/skeleton";

import styles from "./LinkOverview.module.scss";

const cn = classNames.bind(styles);

export default function LinkSkeleton() {
  return (
    <div className={cn("LinkOverview")}>
      <Skeleton
        className={cn("imgBox")}
        style={{ width: "340px", height: "200px" }}
      />
      <div className={cn("caption")}>
        <Skeleton
          className={cn("updatedAt")}
          style={{ width: "100%", height: "20px" }}
        />
        <Skeleton
          className={cn("description")}
          style={{ width: "100%", height: "48px" }}
        />
        <Skeleton
          className={cn("createdAt")}
          style={{ width: "100%", height: "20px" }}
        />
      </div>
    </div>
  );
}
