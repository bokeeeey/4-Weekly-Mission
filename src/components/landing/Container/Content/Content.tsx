import classNames from "classnames/bind";
import Image from "next/image";
import { Content as ContentData } from "@/src/types/type";

import styles from "./Content.module.scss";

const cn = classNames.bind(styles);

interface ContentProps {
  content: ContentData;
  id: number;
}

export default function Content({ content, id }: ContentProps) {
  return (
    <article className={cn("contentBox")}>
      <hgroup className={cn("textBox")}>
        <h1 className={cn("title")}>
          {content.title[0]}
          <br />
          <span className={cn("gradient")}>{content.title[1]}</span>
          {content.title[2]}
        </h1>
        <p className={cn("description")}>{content.description}</p>
      </hgroup>
      <Image
        src={content.img}
        alt={content.alt}
        width={0}
        height={0}
        style={{ height: "auto", maxWidth: "550px" }}
        placeholder="blur"
      />
    </article>
  );
}
