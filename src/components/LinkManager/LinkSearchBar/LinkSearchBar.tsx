import { MagnifierIcon, XIcon } from "@/src/asset";
import styles from "./LinkSearchBar.module.scss";
import { ChangeEvent } from "react";

interface LinkSearchBar {
  handleLinkSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function LinkSearchBar({ handleLinkSearch }: LinkSearchBar) {
  return (
    <div className={styles.LinkSearchBar}>
      <MagnifierIcon />
      <input
        className={styles.input}
        onChange={handleLinkSearch}
        placeholder="링크를 검색해 보세요."
        type="search"
      />
      <div className={styles.cancelIcon}>
        <XIcon />
      </div>
    </div>
  );
}
