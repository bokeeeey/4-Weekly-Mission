import { Suspense, useState } from "react";

import { FavoriteButtonList } from "./LinksList/FavoriteButtonList";
import type { Favorite, TLink } from "@/src/types/type";
import LinksList from "./LinksList/LinksList";
import { useQuery } from "@tanstack/react-query";
import { getFolderIdLinksData } from "@/src/apis";

interface FolderProps {
  favorites?: Favorite[];
  linksData?: TLink[];
}

export default function Folder({ favorites, linksData }: FolderProps) {
  const [folderId, setFolderId] = useState<number | null>(null);

  const { data: folderIdLinksData } = useQuery({
    queryKey: ["linksData", folderId],
    queryFn: () => getFolderIdLinksData(folderId),
    enabled: folderId !== null,
  });

  const handleFavoriteClick = (favorite?: Favorite | null) => {
    if (favorite) {
      setFolderId(favorite.id);
      return;
    }

    setFolderId(null);
  };

  return (
    <>
      <FavoriteButtonList
        favorites={favorites}
        handleFavoriteClick={handleFavoriteClick}
      />

      <Suspense fallback={<div>로딩중이에요~</div>}>
        <LinksList linksData={folderId ? folderIdLinksData : linksData} />
      </Suspense>
    </>
  );
}
