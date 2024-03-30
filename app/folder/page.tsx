import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import LinkManager from "@/src/components/LinkManager/LinkManager";
import { END_POINT } from "@/src/constants";
import getFormattedLinks from "@/src/utils/getFormattedLinks";
// import { useFetchData } from "@/src/hooks/useFetchData";
// page 컴포넌트 안에서 useFetchData 사용시 eslint - hooks rule에 저촉

async function getFetchData(url: string) {
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
}

export default async function page() {
  // links data fetch
  const linksData = await getFetchData(END_POINT.LINKS);
  // links data formatting
  const links = getFormattedLinks(linksData.data);
  // favorites data fetch
  const favorites = await getFetchData(END_POINT.FOLDERS);

  return (
    <>
      <Header />
      <LinkManager links={links} favorites={favorites.data} />
      <Footer />
    </>
  );
}
