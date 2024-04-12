import styles from "./ModalBasic.module.scss";

interface ModalHeader {
  name: string;
  subtitle?: string;
}

export default function ModalHeader({ name, subtitle }: ModalHeader) {
  return (
    <div className={styles.modalHeader}>
      <h2 className={styles.name}>{name}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
