import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import LinkManager from "@/src/components/LinkManager/LinkManager";
import { END_POINT } from "@/src/constants";

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
  const sharedPageDatas = await getFetchData(END_POINT.SHARED_LINKS);

  return (
    <>
      <Header />
      <LinkManager
        links={sharedPageDatas.folder.links}
        userProfile={sharedPageDatas.folder}
      />
      <Footer />
    </>
  );
}
