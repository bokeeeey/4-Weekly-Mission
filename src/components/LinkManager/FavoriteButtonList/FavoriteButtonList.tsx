import { Favorite } from "@/src/constants/types";
import FavoriteButton from "./FavoriteButton/FavoriteButton";
import styles from "./FavoriteButtonList.module.scss";

interface FavoriteButtonListProps {
  favorites?: Favorite[];
  handlefavoriteClick: (favorite?: Favorite | null) => void;
}

export default function FavoriteButtonList({
  favorites,
  handlefavoriteClick,
}: FavoriteButtonListProps) {
  return (
    <section className={styles.FavoriteButtonList}>
      <FavoriteButton onFavoriteClick={handlefavoriteClick} />
      {favorites &&
        favorites.map((favorite) => (
          <FavoriteButton
            key={favorite.id}
            favorite={favorite}
            onFavoriteClick={handlefavoriteClick}
          />
        ))}
    </section>
  );
}
