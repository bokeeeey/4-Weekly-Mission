import { END_POINT } from "@/src/constants";
import { useFetchData } from "@/src/hooks/useFetchData";
import LinkList from "./LinkList/LinkList";
import getFormattedLinks from "@/src/utils/getFormattedLinks";
import FavoriteButtonList from "./FavoriteButtonList/FavoriteButtonList";

export default async function LinkManager() {
  // data fetch 를 page에서 내려보기 = 구조만 변경되도록 설계
  // links data fetch
  const linksData = await useFetchData(END_POINT.LINKS);
  // links data formatting
  const links = getFormattedLinks(linksData.data);
  // favorites data fetch
  const favorites = await useFetchData(END_POINT.FOLDERS);

  const handlefavoriteClick = (favorite) => {
    // setChangeLinksFolder(`${END_POINT.LINKS}?folderId=${favorite.id}`);
    // setLinksTitle(favorite.name);
  };

  const handleTotalBtnClick = () => {
    // setChangeLinksFolder(END_POINT.LINKS);
    // setLinksTitle("전체");
  };

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchValue(e.target.value);
  // };

  // useEffect(() => {
  //   if (searchValue === "") {
  //     setLinks(searchLinks);
  //     return;
  //   }

  //   const filteredLinks = searchLinks.filter((link) => {
  //     return Object.values(link)
  //       .join("")
  //       .toLowerCase()
  //       .includes(searchValue.toLowerCase());
  //   });
  //   setLinks(filteredLinks);
  // }, [searchValue, searchLinks]);

  return (
    <>
      {favorites ? <FavoriteButtonList favorites={favorites.data} /> : <></>}
      <LinkList links={links} />
    </>
  );
}
