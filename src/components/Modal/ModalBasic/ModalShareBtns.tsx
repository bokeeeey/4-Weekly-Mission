import FIcon from "@/assets/svg/FIcon";
import KakaoIcon from "@/assets/svg/KakaoIcon";
import LinkIcon from "@/assets/svg/LinkIcon";
import styles from "./ModalBasic.module.scss";

function ModalShareBtns() {
  return (
    <ul className={styles.modalShareBtns}>
      <li className={styles.shareBtn}>
        <KakaoIcon />
        <p className={styles.shareBtnName}>카카오톡</p>
      </li>
      <li className={styles.shareBtn}>
        <FIcon />
        <p className={styles.shareBtnName}>페이스북</p>
      </li>
      <li className={styles.shareBtn}>
        <LinkIcon />
        <p className={styles.shareBtnName}>링크복사</p>
      </li>
    </ul>
  );
}

export default ModalShareBtns;
