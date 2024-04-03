export const useFetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    const result = await res.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      // alert(error.message);
      console.error(error.message);
    }
  }
};
