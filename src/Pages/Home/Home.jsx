import React from "react";
import Banner from "./Banner";
import GallerySection from "./GallerySection";
import AboutUs from "./AboutUs";
import ReactTabs from "./ReactTabs";


const Home = () => {
    
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
