import Header from "./Header/Header";
import Footer from "./Footer";
import TopSection from "../sections/TopSection";
import StorySection from "../sections/StorySection";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <TopSection />
      <StorySection />
      <Footer />
    </div>
  )
}
