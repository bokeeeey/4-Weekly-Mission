import { END_POINT } from "@/src/constants";
import { useFetchData } from "@/src/hooks/useFetchData";
import LinkList from "./LinkList/LinkList";
import getFormattedLinks from "@/src/utils/getFormattedLinks";
import FavoriteButtonList from "./FavoriteButtonList/FavoriteButtonList";

export default async function LinkManager() {
  // links data fetch
  const linksData = await useFetchData(END_POINT.LINKS);
  // links data formatting
  const links = getFormattedLinks(linksData.data);
  // favorites data fetch
  const favorites = await useFetchData(END_POINT.FOLDERS);
  console.log(favorites);

  const handleFolderClick = (favorite) => {
    // setChangeLinksFolder(`${END_POINT.LINKS}?folderId=${favorite.id}`);
    // setLinksTitle(favorite.name);
  };

  const handleTotalBtnClick = () => {
    // setChangeLinksFolder(END_POINT.LINKS);
    // setLinksTitle("전체");
  };

  return (
    <>
      {favorites ? <FavoriteButtonList favorites={favorites.data} /> : <></>}
      <LinkList links={links} />
    </>
  );
}
