import classNames from "classnames/bind";
import { useQuery } from "@tanstack/react-query";

import { FavoriteButton } from "./FavoriteButton";
import type { Favorite } from "@/src/types/type";

import styles from "./FavoriteButtonList.module.scss";

const cn = classNames.bind(styles);

interface FavoriteButtonListProps {
  handleFavoriteClick: (favorite?: Favorite | null) => void;
}

export default function FavoriteButtonList({
  handleFavoriteClick,
}: FavoriteButtonListProps) {
  const { data: favorites } = useQuery<Favorite[]>({ queryKey: ["favorites"] });

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
