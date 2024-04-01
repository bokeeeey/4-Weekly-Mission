import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import LinkManager from "@/src/components/LinkManager/LinkManager";
import { END_POINT } from "@/src/constants";
import getFormattedLinks from "@/src/utils/getFormattedLinks";

async function getFetchData(url: string) {
  try {
    const res = await fetch(url);
    const result = await res.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}

export default async function FolderPage() {
  const linksData = await getFetchData(END_POINT.LINKS);
  const links = getFormattedLinks(linksData.data);
  const favorites = await getFetchData(END_POINT.FOLDERS);

  return (
    <>
      <Header />
      <LinkManager links={links} favorites={favorites.data} />
      <Footer />
    </>
  );
}
