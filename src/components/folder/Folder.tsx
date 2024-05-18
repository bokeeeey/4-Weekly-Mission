import type { Favorite } from "@/src/types/type";
import { FavoriteButtonList } from "./LinksList/FavoriteButtonList";

interface FolderProps {
  favorites?: Favorite[];
}

export default function Folder({ favorites }: FolderProps) {
  console.log(favorites);

  const handleFavoriteClick = (favorite?: Favorite | null) => {
    console.log(favorite);
  };

  return (
    <>
      <FavoriteButtonList
        favorites={favorites}
        handleFavoriteClick={handleFavoriteClick}
      />
    </>
  );
}
