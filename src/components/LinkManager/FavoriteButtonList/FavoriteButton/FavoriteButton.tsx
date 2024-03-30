import { Favorite } from "@/src/constants/types";
import styles from "./FavoriteButton.module.scss";

interface FavoriteButton {
  favorite?: Favorite;
  handlefavoriteClick: (favorite?: Favorite | null) => void;
}

export default function FavoriteButton({
  favorite,
  handlefavoriteClick,
}: FavoriteButton) {
  const { name, id } = favorite || { name: "전체", id: null };
  return (
    <button
      className={styles.FavoriteButton}
      onClick={() => handlefavoriteClick(favorite)}
    >
      {name}
    </button>
  );
}
