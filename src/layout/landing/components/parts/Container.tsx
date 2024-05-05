import Image from "next/image";
import { Img_Link, Img_Manage, Img_Serch, Img_Share } from "@/public";

export default function Container() {
  return (
    <main>
      <article>
        <hgroup>
          <h1>
            <span>원하는 링크</span>를 저장하세요
          </h1>
          <p>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
            싶은 모든 것을 한 공간에 저장하세요.
          </p>
        </hgroup>
        <figure>
          <Image
            src={Img_Link}
            alt="link_image"
            style={{ objectFit: "contain" }}
            placeholder="blur"
          />
        </figure>
      </article>
    </main>
  );
}
