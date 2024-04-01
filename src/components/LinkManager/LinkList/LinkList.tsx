import { Link } from "@/src/constants/types";
import LinkOverview from "./LinkOverview/LinkOverView";
import styles from "./LinkList.module.scss";

interface LinkListProps {
  links: Link[];
}

export default function LinkList({ links }: LinkListProps) {
  return (
    <section className={styles.linkList}>
      {links.map((link) => (
        <LinkOverview link={link} key={link.id} />
      ))}
    </section>
  );
}
