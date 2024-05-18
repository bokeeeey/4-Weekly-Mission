import { FavoriteButtonList } from "./LinksList/FavoriteButtonList";
import type { Favorite, TLink } from "@/src/types/type";
import LinksList from "./LinksList/LinksList";

interface FolderProps {
  favorites?: Favorite[];
  linksData?: TLink[];
}

export default function Folder({ favorites, linksData }: FolderProps) {
  // console.log(linksData);

  const handleFavoriteClick = (favorite?: Favorite | null) => {
    console.log(favorite);
  };

  return (
    <>
      <FavoriteButtonList
        favorites={favorites}
        handleFavoriteClick={handleFavoriteClick}
      />
      <LinksList linksData={linksData} />
    </>
  );
}
