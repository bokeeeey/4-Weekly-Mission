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

export interface TLink {
  created_at: string;
  favorite: boolean;
  id: number;
  link_count: number;
  name: string;
}

export interface LinksData {
  link: TLink[];
}
