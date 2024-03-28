import { DeleteIcon, PencilIcon, ShareIcon } from "@/assets";
import Modal from "@components/Modal/Modal";
import styles from "./CardModals.module.scss";

export default function CardModals() {
  return (
    <section className={styles.cardModals}>
      <div className={styles.modalBtn}>
        <ShareIcon />
        <Modal name={"공유"} subtitle={"수정필요"} shareButtons={true} />
      </div>
      <div className={styles.modalBtn}>
        <PencilIcon />
        <Modal name={"이름변경"} />
      </div>
      <div className={styles.modalBtn}>
        <DeleteIcon />
        <Modal name={"삭제"} subtitle={"수정 필요"} />
      </div>
    </section>
  );
}
