import classNames from "classnames/bind";
import { LinkOverview } from "./LinkOverview";
import type { TLink } from "@/src/types/type";

import styles from "./LinksList.module.scss";

const cn = classNames.bind(styles);

interface LinksListProps {
  linksData?: TLink[];
}

export default function LinksList({ linksData }: LinksListProps) {
  return (
    <section className={cn("linkList")}>
      {linksData?.map((link) => (
        <LinkOverview link={link} key={link.id} />
      ))}
    </section>
  );
}
