export interface Link {
  id: string;
  imageSource: string;
  createdAt: string;
  description: string;
  title: string;
  url: string;
}

export interface Favorite {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export interface UserProfile {
  name: string;
  owner: {
    profileImageSource: string;
    name: string;
  };
  links: Link[];
  count: number;
}

export interface FormatLink {
  id: string;
  image_source: string;
  created_at: string;
  description: string;
  title: string;
  url: string;
}
