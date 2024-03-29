export default function LinkSearchBar({ handleInputChange, value }) {
  return (
    <div className={styles.CardSearchInput}>
      <CardSearchInputIcon />
      <input
        className={styles.input}
        onChange={handleInputChange}
        placeholder="링크를 검색해 보세요."
        value={value}
        type="search"
      />
      <div className={styles.cancelIcon}>
        <CloseIcon />
      </div>
    </div>
  );
}
