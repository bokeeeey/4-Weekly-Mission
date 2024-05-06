import { StaticImageData } from "next/image";

export interface Content {
  title: string[];
  description: string;
  img: StaticImageData;
  alt: string;
}
