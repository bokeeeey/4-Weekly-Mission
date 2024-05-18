import classNames from "classnames/bind";
import type { Favorite } from "@/src/types/type";

import styles from "./FavoriteButton.module.scss";

const cn = classNames.bind(styles);

interface FavoriteButtonProps {
  favorite?: Favorite;
  onFavoriteClick: (favorite?: Favorite | null) => void;
}

export default function FavoriteButton({
  favorite,
  onFavoriteClick,
}: FavoriteButtonProps) {
  const { name } = favorite || { name: "전체" };

  return (
    <button
      className={cn("FavoriteButton")}
      onClick={() => onFavoriteClick(favorite)}
    >
      {name}
    </button>
  );
}
