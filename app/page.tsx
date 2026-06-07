import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SpecialsTicker from "@/components/SpecialsTicker";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Process from "@/components/Process";
import GuestReviews from "@/components/GuestReviews";
import PhotoGallery from "@/components/PhotoGallery";
import Catering from "@/components/Catering";
import FindUs from "@/components/FindUs";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SpecialsTicker />
        <About />
        <MenuSection />
        <Process />
        <GuestReviews />
        <PhotoGallery />
        <Catering />
        <FindUs />
      </main>
      <SiteFooter />
    </>
  );
}
