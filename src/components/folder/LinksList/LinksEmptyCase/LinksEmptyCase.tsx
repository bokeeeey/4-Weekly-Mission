import classNames from "classnames/bind";
import styles from "./LinksEmptyCase.module.scss";

const cn = classNames.bind(styles);

export default function LinkEmptyCase() {
  return (
    <section className={cn("LinksEmptyCase")}>
      <p className={cn("text")}>저장된 링크가 없습니다</p>
    </section>
  );
}
