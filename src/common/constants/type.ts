import { StaticImageData } from "next/image";

export interface Content {
  title: string[];
  description: string;
  img: StaticImageData;
  alt: string;
}

export interface User {
  id: number;
  name: string;
  image_source: string;
  email: string;
}
