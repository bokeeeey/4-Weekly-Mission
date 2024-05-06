import { Img_Link, Img_Manage, Img_Serch, Img_Share } from "@/public";
import { Content } from "./type";

export const ROUTER = {
  HOME: "/",
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up",
} as const;

export const SNS_LINK = {
  FACEBOOK: "https://www.facebook.com",
  TWITTER: "https://twitter.com",
  YOUTUBE: "https://www.youtube.com",
  INSTAGRAM: "https://www.instagram.com",
} as const;

export const LANDING_CONTENTS = [
  {
    title: ["원하는 링크를", "저장", "하세요"],
    description:
      "나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요.",
    img: Img_Link,
    alt: "example",
  },
  {
    title: ["링크를 폴더로", "관리", "하세요"],
    description: "나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.",
    img: Img_Manage,
    alt: "example",
  },
  {
    title: ["저장한 링크를", "공유", "해 보세요"],
    description:
      "여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.",
    img: Img_Share,
    alt: "example",
  },
  {
    title: ["저장한 링크를", "검색", "해 보세요"],
    description: "중요한 정보들을 검색으로 쉽게 찾아보세요.",
    img: Img_Serch,
    alt: "example",
  },
] as Content[];
