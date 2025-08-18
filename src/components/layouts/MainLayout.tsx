import Header from "./Header/Header";
import Footer from "./Footer";
import TopSection from "@/components/sections/TopSection";
import AboutSection from "@/components/sections/AboutSection";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <TopSection />
      <AboutSection />
      <Footer />
    </div>
  )
}