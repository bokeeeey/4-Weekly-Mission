import { ChangeEvent, useEffect, useState } from "react";
import { END_POINT } from "../../constants/index.ts";
import { FormatLink, ObjectLink, ObjectFolder } from "@/constants/index.types";
import useGet from "../../hooks/useGet";
import getFormattedLinks from "@/utils/getFormattedLinks.ts";
import CardSearchInput from "./CardSearchInput/CardSearchInput.tsx";
import CardFolderList from "./CardFolderList/CardFolderList.tsx";
import CardList from "../CardList/CardList.tsx";
import LinksEmptyCase from "./LinksEmptyCase/LinksEmptyCase.tsx";
import CardModals from "./CardModals/CardModals.tsx";
import styles from "./CardListBox.module.scss";

export default function CardListBox() {
  // 북마크 Folders 상태
  const [folders, setFolders] = useState<ObjectFolder[]>([]);
  // 렌더링되는 Card - Links 상태
  const [links, setLinks] = useState<ObjectLink[]>([]);
  // 북마크 Folder의 id로 END_POINT.links + query 변경
  const [changeLinksFolder, setChangeLinksFolder] = useState(END_POINT.LINKS);
  // select한 북마크 Folder의 이름으로 title 변경
  const [linksTitle, setLinksTitle] = useState("전체");
  // 전체 데이터 배열 저장 = 검색용
  const [searchLinks, setSearchLinks] = useState<ObjectLink[]>([]);
  // inputValue 상태
  const [searchValue, setSearchValue] = useState("");
  // useGet Hook으로 dataFetching
  const { data: foldersData, isLoading: isFoldersLoading } = useGet<
    ObjectFolder[]
  >(END_POINT.FOLDERS);
  // 북마크 Folder의 id값으로 해당 id의 dataFetching
  const { data: linksData, isLoading: isLinksLoading } =
    useGet<FormatLink[]>(changeLinksFolder);

  useEffect(() => {
    if (!isFoldersLoading && !isLinksLoading) {
      // 북마크 Folders 상태 변경
      setFolders(foldersData);
      // ObjectValues의 이름값 formating
      const strangeData = linksData;
      const rightData = getFormattedLinks(strangeData);
      // links 상태 변경
      setLinks(rightData);
      // 검색용 links 상태 변경
      setSearchLinks(rightData);
    }
  }, [foldersData, isFoldersLoading, linksData, isLinksLoading]);
  //
  const handleFolderClick = (folder: ObjectFolder) => {
    setChangeLinksFolder(`${END_POINT.LINKS}?folderId=${folder.id}`);
    setLinksTitle(folder.name);
  };

  const handleTotalBtnClick = () => {
    setChangeLinksFolder(END_POINT.LINKS);
    setLinksTitle("전체");
  };

  // input type="search" 로 변경 후 내부 버튼 상호작용으로 수정
  // const handleSearchInputCancel = () => {
  //   setSearchValue("");
  //   setLinks(searchLinks);
  // };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setLinks(searchLinks);
      return;
    }

    const filteredLinks = searchLinks.filter((link) => {
      return Object.values(link)
        .join("")
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
    setLinks(filteredLinks);
  }, [searchValue, searchLinks]);

  return (
    <main className={styles.CardListBox}>
      <CardSearchInput
        value={searchValue}
        handleInputChange={handleInputChange}
      />
      <section className={styles.cardList}>
        <CardFolderList
          folders={folders}
          onFolderClick={handleFolderClick}
          onTotalButtonClick={handleTotalBtnClick}
        />
        <div className={styles.titleBox}>
          <h1 className={styles.linksTitle}>{linksTitle}</h1>
          <div className={styles.Modals}>
            <CardModals />
          </div>
        </div>
        {links && links.length > 0 ? (
          <CardList links={links} />
        ) : (
          <LinksEmptyCase />
        )}
      </section>
    </main>
  );
}
