import { useState } from "react";

import { FavoriteButtonList, LinksList } from ".";
import type { Favorite } from "@/src/types/type";

export default function Folder() {
  const [folderId, setFolderId] = useState<number | null>(null);

  const handleFavoriteClick = (favorite?: Favorite | null) => {
    if (favorite) {
      setFolderId(favorite.id);
      return;
    }

    setFolderId(null);
  };

  return (
    <>
      <FavoriteButtonList handleFavoriteClick={handleFavoriteClick} />
      <LinksList folderId={folderId} />
    </>
  );
}
