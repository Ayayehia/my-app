import HeroSection from "./components/HeroSection";
import MobileNav from "./components/MobileNav";
import NavBar from "./components/NavBar";
import PictureTextBlock from "./components/PictureTextBlock";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="hidden lg:block">
        <NavBar />
      </div>
      <div className="lg:hidden ">
        <MobileNav />
      </div>
      <PictureTextBlock />
    </main>
  );
}
