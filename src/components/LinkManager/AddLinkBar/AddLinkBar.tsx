import { ChainIcon } from "@/src/asset";
import styles from "./AddLinkBar.module.scss";

export default function AddLinkBar() {
  return (
    <section className={styles.AddLinkBar}>
      <form className={styles.form}>
        <div className={styles.inputBox}>
          <ChainIcon />
          <input
            className={styles.input}
            placeholder="링크를 추가해 보세요"
            type="text"
          />
        </div>
        {/* 모달로 변경 예정 */}
        <button className={styles.inputBtn}>추가하기</button>
      </form>
    </section>
  );
}
