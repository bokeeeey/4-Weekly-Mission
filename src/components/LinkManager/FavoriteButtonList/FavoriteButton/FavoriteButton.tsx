import styles from "./FavoriteButton.module.scss";

export default function FavoriteButton({
  favorite,
  // onFolderClick
}) {
  return (
    <button
      className={styles.FavoriteButton}
      // onClick={() => onFolderClick(Favorite)}
    >
      {favorite.name}
    </button>
  );
}
