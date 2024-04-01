import { Favorite } from "@/src/constants/types";
import styles from "./FavoriteButton.module.scss";

interface FavoriteButtonProps {
  favorite?: Favorite;
  onFavoriteClick: (favorite?: Favorite | null) => void;
}

export default function FavoriteButton({
  favorite,
  onFavoriteClick,
}: FavoriteButtonProps) {
  const { name, id } = favorite || { name: "전체", id: null };
  return (
    <button
      className={styles.FavoriteButton}
      onClick={() => onFavoriteClick(favorite)}
    >
      {name}
    </button>
  );
}
