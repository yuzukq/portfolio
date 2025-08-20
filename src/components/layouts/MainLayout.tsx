import Header from "./Header/Header";
import Footer from "./Footer";

import TopSection from "@/components/sections/TopSection";
import AboutSection from "@/components/sections/AboutSection";
import StorySection from "@/components/sections/StorySection";


export default function MainLayout() {
  return (
    <div>
      <Header />
      <TopSection />
      <AboutSection />
      <StorySection />
      <Footer />
    </div>
  )
}
