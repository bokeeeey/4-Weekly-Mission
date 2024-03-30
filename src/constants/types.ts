export interface Link {
  id: string;
  imageSource: string;
  createdAt: Date;
  description: string;
  title: string;
  url: string;
}

export interface Favorite {
  id: number;
  created_at: Date;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}