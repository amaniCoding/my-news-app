
import { FeaturedSections } from "./ui/featured-sections/featured-sections";
import Footer from "./ui/footer";
import HomePage from "./ui/home-page";
import InCaseMiss from "./ui/incase-miss";
import NavBar from "./ui/navbar";
import TopStories1 from "./ui/top-stories/div-one/home";
import TopStories2 from "./ui/top-stories/div-two/home";
export default function Home() {
  return (
    <main>
      <NavBar/>
      <HomePage/>
      <TopStories1/>
      <TopStories2/>
      <FeaturedSections/>
      <InCaseMiss/>
      <Footer/>
    </main>
  );
}
