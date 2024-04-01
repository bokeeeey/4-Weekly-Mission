import { MagnifierIcon, XIcon } from "@/src/asset";

import { ChangeEvent } from "react";

import styles from "./LinkSearchBar.module.scss";

interface LinkSearchBarProps {
  onSearchValue: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: any;
}

export default function LinkSearchBar({
  onSearchValue,
  inputValue,
}: LinkSearchBarProps) {
  return (
    <div className={styles.LinkSearchBar}>
      <MagnifierIcon />
      {/* input component로 바꿔보자 */}
      <input
        className={styles.input}
        onChange={onSearchValue}
        placeholder="링크를 검색해 보세요."
        type="search"
        value={inputValue}
      />
      <div className={styles.cancelIcon}>
        <XIcon />
      </div>
    </div>
  );
}
