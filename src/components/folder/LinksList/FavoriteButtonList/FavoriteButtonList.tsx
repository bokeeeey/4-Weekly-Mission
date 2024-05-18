import classNames from "classnames/bind";
import { FavoriteButton } from "./FavoriteButton";
import type { Favorite } from "@/src/types/type";

import styles from "./FavoriteButtonList.module.scss";

const cn = classNames.bind(styles);

interface FavoriteButtonListProps {
  favorites?: Favorite[];
  handleFavoriteClick: (favorite?: Favorite | null) => void;
}

export default function FavoriteButtonList({
  favorites,
  handleFavoriteClick,
}: FavoriteButtonListProps) {
  return (
    <section className={cn("FavoriteButtonList")}>
      <FavoriteButton onFavoriteClick={handleFavoriteClick} />
      {favorites &&
        favorites.map((favorite) => (
          <FavoriteButton
            key={favorite.id}
            favorite={favorite}
            onFavoriteClick={handleFavoriteClick}
          />
        ))}
    </section>
  );
}
