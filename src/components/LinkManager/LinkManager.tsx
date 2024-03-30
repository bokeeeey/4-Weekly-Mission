"use client";
import LinkList from "./LinkList/LinkList";
import FavoriteButtonList from "./FavoriteButtonList/FavoriteButtonList";
import LinkSearchBar from "./LinkSearchBar/LinkSearchBar";
import { Favorite, Link as LinkType } from "@/src/constants/types";
import { useState } from "react";
import LinkEmptyCase from "./LinkList/LinkEmptyCase/LinkEmptyCase";
import { useFetchData } from "@/src/hooks/useFetchData";
import { END_POINT } from "@/src/constants";
import getFormattedLinks from "@/src/utils/getFormattedLinks";

interface LinkManager {
  links: LinkType[];
  favorites?: Favorite[];
}

export default function LinkManager({ links, favorites }: LinkManager) {
  const [favoriteLinks, setFavoriteLinks] = useState(links);

  const handlefavoriteClick = async (favorite?: Favorite | null) => {
    // favorite id값으로 다시 fetch
    if (favorite) {
      const data = await useFetchData(
        `${END_POINT.LINKS}?folderId=${favorite.id}`
      );

      return setFavoriteLinks(getFormattedLinks(data.data));
    }

    setFavoriteLinks(links);
  };

  // const handleTotalBtnClick = () => {
  //   setChangeLinksFolder(END_POINT.LINKS);
  //   setLinksTitle("전체");
  // };

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
      <LinkSearchBar />
      {favorites ? (
        <FavoriteButtonList
          favorites={favorites}
          handlefavoriteClick={handlefavoriteClick}
        />
      ) : (
        <></>
      )}
      {favoriteLinks ? <LinkList links={favoriteLinks} /> : <LinkEmptyCase />}
    </>
  );
}
