import Header from "./Header/Header";
import Footer from "./Footer";

import TopSection from "@/components/sections/TopSection";
import AboutSection from "@/components/sections/AboutSection";
import StorySection from "@/components/sections/StorySection";
import ProductSection from "@/components/sections/ProductSection";
import SkillSection from "@/components/sections/SkillSection";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <TopSection />
      <AboutSection />
      <ProductSection />
      <SkillSection />
      <StorySection/>
      <Footer />
    </div>
  )
}
