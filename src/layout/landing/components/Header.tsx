import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cn("header")}>
      <div></div>
    </header>
  );
}
