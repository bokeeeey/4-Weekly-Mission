import classNames from "classnames/bind";
import { LANDING_CONTENTS } from "@/src/common/constants";
import Content from "./Content";

import styles from "./Container.module.scss";

const cn = classNames.bind(styles);

export default function Container() {
  return (
    <main className={cn("container")}>
      {LANDING_CONTENTS.map((content, i) => {
        return <Content key={i} content={content} id={i} />;
      })}
    </main>
  );
}
