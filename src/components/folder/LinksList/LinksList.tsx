import classNames from "classnames/bind";
import { useQuery } from "@tanstack/react-query";

import { LinkOverview } from "./LinkOverview";
import { getFolderIdLinksData } from "@/src/apis";
import type { TLink } from "@/src/types/type";

import styles from "./LinksList.module.scss";

const cn = classNames.bind(styles);

interface LinksListProps {
  folderId?: number | null;
}

export default function LinksList({ folderId }: LinksListProps) {
  const { data: totalLinksData } = useQuery<TLink[]>({
    queryKey: ["linksData"],
  });

  const { data: folderIdLinksData } = useQuery<TLink[]>({
    queryKey: ["linksData", folderId],
    queryFn: () => getFolderIdLinksData(folderId!),
    enabled: !!folderId === true,
  });

  const LINKS = folderId ? folderIdLinksData : totalLinksData;

  return (
    <section className={cn("linkList")}>
      {LINKS?.map((link) => (
        <LinkOverview link={link} key={link.id} />
      ))}
    </section>
  );
}
