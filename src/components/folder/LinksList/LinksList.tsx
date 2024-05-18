import classNames from "classnames/bind";=
import { LinksData } from "@/src/types/type";
import { LinkOverview } from "./LinkOverview";

import styles from "./LinksList.module.scss"

const cn = classNames.bind(styles)

interface LinksListProps {
  linksData: LinksData;
}

export default function LinksList({ linksData }: LinksListProps) {
  return (
    <section className={cn("linkList")}>
      {linksData.map((link) => (
        <LinkOverview link={link} key={link.id} />
      ))}
    </section>
  );
}
