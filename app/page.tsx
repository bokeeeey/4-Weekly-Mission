import Auth from "@/src/components/Auth/Auth";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.input}>
        <Auth />
      </div>
    </>
  );
}
