
import { FeaturedSections } from "./ui/featured-sections/featured-sections";
import Footer from "./ui/footer";
import HomePage from "./ui/home-page";
import InCaseMiss from "./ui/incase-miss";
import NavBar from "./ui/navbar";
import TopStories from "./ui/top-stories";
export default function Home() {
  return (
    <main>
      <NavBar/>
      <HomePage/>
      <TopStories/>
      <FeaturedSections/>
      <InCaseMiss/>
      <Footer/>
    </main>
  );
}
