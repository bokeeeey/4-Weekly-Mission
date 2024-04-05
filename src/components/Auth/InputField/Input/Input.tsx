import styles from "./Input.module.scss";

interface Input {
  className: string;
  type: string;
  name: string;
}

export default function Input({ className, ...rest }: Input) {
  return (
    <input className={`${styles.default} ${styles[className]}`} {...rest} />
  );
}
