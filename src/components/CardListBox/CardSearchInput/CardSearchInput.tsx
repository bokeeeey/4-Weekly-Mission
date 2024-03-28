import CardSearchInputIcon from "@/assets/svg/CardSearchInputIcon";
import styles from "./CardSearchInput.module.scss";
import CloseIcon from "@/assets/svg/CloseIcon";

interface CardSearchInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function CardSearchInput({
  handleInputChange,
  value,
}: CardSearchInputProps) {
  return (
    <div className={styles.CardSearchInput}>
      <CardSearchInputIcon />
      <input
        className={styles.input}
        onChange={handleInputChange}
        placeholder="링크를 검색해 보세요."
        value={value}
        type="search"
      />
      <div className={styles.cancelIcon}>
        <CloseIcon />
      </div>
    </div>
  );
}
