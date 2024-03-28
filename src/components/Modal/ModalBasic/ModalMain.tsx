import ModalShareBtns from "./ModalShareBtns";

interface ModalMain {
  shareButtons?: boolean;
}

export default function ModalMain({ shareButtons }: ModalMain) {
  return <>{shareButtons && <ModalShareBtns />}</>;
}
