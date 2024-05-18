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

export interface Favorite {
  created_at: string;
  favorite: boolean;
  id: number;
  link_count: number;
  name: string;
}

export interface TLink {
  id: number;
  created_at: string;
  description: string;
  favorite: boolean;
  image_source: string;
  title: string;
  url: string;
}
