import { Favorite } from "@/src/constants/types";
import FavoriteButton from "./FavoriteButton/FavoriteButton";
import styles from "./FavoriteButtonList.module.scss";

interface FavoriteButtonList {
  favorites?: Favorite[];
  handlefavoriteClick: (favorite?: Favorite | null) => void;
}

export default function FavoriteButtonList({
  favorites,
  handlefavoriteClick,
}: FavoriteButtonList) {
  return (
    <section className={styles.FavoriteButtonList}>
      <FavoriteButton handlefavoriteClick={handlefavoriteClick} />
      {favorites &&
        favorites.map((favorite) => (
          <FavoriteButton
            key={favorite.id}
            favorite={favorite}
            handlefavoriteClick={handlefavoriteClick}
          />
        ))}
    </section>
  );
}
