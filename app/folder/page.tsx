import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import LinkManager from "@/src/components/LinkManager/LinkManager";
import { END_POINT } from "@/src/constants";

export default function page() {
  return (
    <>
      <Header />
      <LinkManager />
      <Footer />
    </>
  );
}
