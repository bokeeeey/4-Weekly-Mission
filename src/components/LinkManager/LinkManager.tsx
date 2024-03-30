"use client";
import LinkList from "./LinkList/LinkList";
import FavoriteButtonList from "./FavoriteButtonList/FavoriteButtonList";
import LinkSearchBar from "./LinkSearchBar/LinkSearchBar";
import { Favorite, Link as LinkType } from "@/src/constants/types";
import { ChangeEvent, useEffect, useState } from "react";
import LinkEmptyCase from "./LinkList/LinkEmptyCase/LinkEmptyCase";
import { END_POINT } from "@/src/constants";
import getFormattedLinks from "@/src/utils/getFormattedLinks";

interface LinkManager {
  links: LinkType[];
  favorites?: Favorite[];
}

export default function LinkManager({ links, favorites }: LinkManager) {
  // 렌더링되는 Links 배열 상태
  const [favoriteLinks, setFavoriteLinks] = useState(links);
  // LinkList title 상태
  const [favoriteTitle, setFavoriteTitle] = useState("전체");
  // LinkSearchBar의 입력 value 상태
  const [searchValue, setSearchValue] = useState("");

  // favoriteBotton의 onClickEvent
  const handlefavoriteClick = async (favorite?: Favorite | null) => {
    // favorite id값으로 다시 fetch
    if (favorite) {
      const res = await fetch(`${END_POINT.LINKS}?folderId=${favorite.id}`);
      const result = await res.json();

      setFavoriteTitle(favorite.name);
      setFavoriteLinks(getFormattedLinks(result.data));
      return;
    }
    // favorite 값이 없는 button이면 리셋
    setFavoriteTitle("전체");
    setFavoriteLinks(links);
  };

  // LinkSearchBar의 onChangeEvent
  const handleLinkSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // LinkSearchBar의 onChangeEvent 발생 시 links filtering
  useEffect(() => {
    if (searchValue === "") {
      setFavoriteLinks(links);
      return;
    }

    const filteredLinks = links.filter((link) => {
      return Object.values(link)
        .join("")
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
    setFavoriteLinks(filteredLinks);
  }, [searchValue, links]);

  return (
    <>
      <LinkSearchBar handleLinkSearch={handleLinkSearch} />
      {favorites && (
        <>
          <FavoriteButtonList
            favorites={favorites}
            handlefavoriteClick={handlefavoriteClick}
          />
          <div>
            <h1>{favoriteTitle}</h1>
          </div>
        </>
      )}
      {favoriteLinks ? <LinkList links={favoriteLinks} /> : <LinkEmptyCase />}
    </>
  );
}
