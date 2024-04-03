"use client";

import { ChangeEvent, use, useEffect, useRef, useState } from "react";

import { END_POINT } from "@/src/constants";

import LinkList from "./LinkList/LinkList";
import FavoriteButtonList from "./FavoriteButtonList/FavoriteButtonList";
import LinkSearchBar from "./LinkSearchBar/LinkSearchBar";
import LinkEmptyCase from "./LinkList/LinkEmptyCase/LinkEmptyCase";
import AddLinkBar from "./AddLinkBar/AddLinkBar";
import UserProfile from "./UserProfile/UserProfile";

import {
  Favorite,
  Link as TLink,
  UserProfile as TUserProfile,
} from "@/src/constants/types";

import getFormattedLinks from "@/src/utils/getFormattedLinks";
import useIntersectionObserver from "@/src/hooks/useIntersectionObserver";

import styles from "./LinkManager.module.scss";

interface LinkManager {
  links: TLink[];
  favorites?: Favorite[];
  userProfile?: TUserProfile;
}

export default function LinkManager({
  links,
  favorites,
  userProfile,
}: LinkManager) {
  // 렌더링되는 Links 배열 상태
  const [favoriteLinks, setFavoriteLinks] = useState(links);
  // LinkList title 상태
  const [favoriteTitle, setFavoriteTitle] = useState("전체");
  // LinkSearchBar의 입력 value 상태
  const [searchValue, setSearchValue] = useState("");
  // targetRef of intersectionObserver
  const addLinkBarRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  // targetRef로 상태 설정
  const isAddLinkBarIntersecting = useIntersectionObserver({
    targetRef: addLinkBarRef,
  });
  const isFooterIntersecting = useIntersectionObserver({
    targetRef: footerRef,
  });

  // intersectionObserver의 상태로 style 변경
  const className =
    isAddLinkBarIntersecting || isFooterIntersecting
      ? null
      : styles.addLinkBarVisible;

  // test
  // const got = use(fetch(`${END_POINT.LINKS}`));

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
  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // LinkSearchBar의 onChangeEvent 발생 시 links filtering
  // 훅이나 함수로 분리 가능할까요? 시도해보았지만 접근이 잘 안됩니다
  // filteredLinks 함수만 따로 분리하는게 나을까요?
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
    <main className={styles.LinkManager}>
      {userProfile ? (
        <UserProfile userProfile={userProfile} />
      ) : (
        <div className={styles.addLinkManager} ref={addLinkBarRef}>
          <AddLinkBar />
        </div>
      )}
      <LinkSearchBar
        onSearchValue={handleSearchValue}
        inputValue={searchValue}
      />
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
      {favoriteLinks && favoriteLinks.length > 0 ? (
        <LinkList links={favoriteLinks} />
      ) : (
        <LinkEmptyCase />
      )}
      {/* footer의 ref를 잡을 수 없어서 임의로 만들었습니다 */}
      <div ref={footerRef} />
      <div className={`${styles.fixedAddLinkManager} ${className}`}>
        <AddLinkBar />
      </div>
    </main>
  );
}
