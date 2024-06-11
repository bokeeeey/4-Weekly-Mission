import { useRef, useState } from "react";
import ModalBasic from "./ModalBasic/ModalBasic";
import styles from "./Modal.module.scss";
import { useOnClickOutside } from "usehooks-ts";

interface Modal {
  name: string;
  subtitle?: string;
  shareButtons?: boolean;
}

function Modal({ name, ...rest }: Modal) {
  // 평상시 modal 노출 false
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  // 모달 닫기 false
  const handleClickOutside = () => {
    setIsOpen((preIsOpen) => !preIsOpen);
  };
  useOnClickOutside(modalRef, handleClickOutside);

  return (
    <div>
      <button
        onClick={() => setIsOpen((preIsOpen) => !preIsOpen)}
        className={styles.button}
      >
        {name}
      </button>
      {isOpen && (
        <ModalBasic
          name={name}
          modalRef={modalRef}
          handleClickOutside={handleClickOutside}
          {...rest}
        />
      )}
    </div>
  );
}

export default Modal;
