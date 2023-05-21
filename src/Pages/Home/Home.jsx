
import Banner from "./Banner";
import GallerySection from "./GallerySection";
import AboutUs from "./AboutUs";
import ReactTabs from "./ReactTabs";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  
  return (
    <div>
      <Banner></Banner>
      <GallerySection></GallerySection>
      <ReactTabs></ReactTabs>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
