import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import LinkManager from "@/src/components/LinkManager/LinkManager";
import { END_POINT } from "@/src/constants";
import { useFetchData } from "@/src/hooks/useFetchData";
import getFormattedLinks from "@/src/utils/getFormattedLinks";

export default async function page() {
  // data fetch 를 page에서 내려보기 = 구조만 변경되도록 설계
  // links data fetch
  const linksData = await useFetchData(END_POINT.LINKS);
  // links data formatting
  const links = getFormattedLinks(linksData.data);
  // favorites data fetch
  const favorites = await useFetchData(END_POINT.FOLDERS);

  return (
    <>
      <Header />
      <LinkManager links={links} favorites={favorites.data} />
      <Footer />
    </>
  );
}
