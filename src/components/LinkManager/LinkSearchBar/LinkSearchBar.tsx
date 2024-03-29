import { MagnifierIcon, XIcon } from "@/src/asset";
import styles from "./LinkSearchBar.module.scss";

export default function LinkSearchBar({ handleInputChange, value }) {
  return (
    <div className={styles.LinkSearchBar}>
      <MagnifierIcon />
      <input
        className={styles.input}
        onChange={handleInputChange}
        placeholder="링크를 검색해 보세요."
        value={value}
        type="search"
      />
      <div className={styles.cancelIcon}>
        <XIcon />
      </div>
    </div>
  );
}
