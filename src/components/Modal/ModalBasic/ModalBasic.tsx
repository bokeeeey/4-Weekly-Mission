import ModalHeader from "./ModalHeader";
import ModalMain from "./ModalMain";
import styles from "./ModalBasic.module.scss";
import CloseIcon from "@/assets/svg/CloseIcon";
import { RefObject } from "react";

interface ModalBasic {
  name: string;
  modalRef: RefObject<HTMLDivElement>;
  handleClickOutside: () => void;

  subtitle?: string;
  shareButtons?: boolean;
}

export default function ModalBasic({
  name,
  modalRef,
  handleClickOutside,
  ...rest
}: ModalBasic) {
  const { subtitle, shareButtons } = rest;
  return (
    <>
      <div
        className={styles.modalBackground}
        onClick={handleClickOutside}
      ></div>
      <div className={styles.modalBasic} ref={modalRef}>
        <div className={styles.modalContainer}>
          <button className={styles.closeBtn} onClick={handleClickOutside}>
            <CloseIcon />
          </button>
          <ModalHeader name={`폴더 ${name}`} subtitle={subtitle} />
          <ModalMain shareButtons={shareButtons} />
        </div>
      </div>
    </>
  );
}
