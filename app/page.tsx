import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import SignatureDish from "@/components/sections/SignatureDish";
import HiddenGem from "@/components/sections/HiddenGem";
import Interior from "@/components/sections/Interior";
import Menu from "@/components/sections/Menu";
import Access from "@/components/sections/Access";
import StoreInfo from "@/components/sections/StoreInfo";
import Reservation from "@/components/sections/Reservation";
import Recruitment from "@/components/sections/Recruitment";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SignatureDish />
        <HiddenGem />
        <Interior />
        <Menu />
        <Access />
        <StoreInfo />
        <Reservation />
        <Recruitment />
      </main>
      <Footer />
    </>
  );
}
