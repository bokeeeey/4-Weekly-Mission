import FavoriteButton from "./FavoriteButton/FavoriteButton";
import styles from "./FavoriteButtonList.module.scss";

export default function FavoriteButtonList({
  favorites,
  // onFolderClick,
  // onTotalButtonClick,
}) {
  return (
    <section className={styles.FavoriteButtonList}>
      <button
        className={styles.totalBtn}
        // onClick={onTotalButtonClick}
        type="button"
      >
        전체
      </button>
      {favorites.map((favorite) => (
        <FavoriteButton
          // onFolderClick={onFolderClick}
          key={favorite.id}
          favorite={favorite}
        />
      ))}
    </section>
  );
}
