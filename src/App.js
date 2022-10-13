import styles from "./App.module.css";
import { data } from "./Response";
import AddsBar from "./components/AddsBar";
import Header from "./components/Header";
import SliderProductsBody from "./components/SliderProductsBody";
import ProductCard from "./components/ProductCard";
import AboutMatter from "./components/AboutMatter";
import Explore from "./components/Explore";
import TopicTitle from "./components/TopicTitle";
import Shop from "./components/Shop";
import RecommendedVideos from "./components/RecommendedVideos";
import AsSeenOn from "./components/AsSeenOn";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
// import ImageSlider from "./ImageSlider";


  const slides = [
    {
      url: "./images/sliderImg1.png",
    },
    {
      url: "./images/sliderImg2.png",
    },
    {
      url: "./images/sliderImg3.png",
    },
    {
      url: "./images/sliderImg4.png",
    },
    {
      url: "./images/sliderImg5.png",
    },
    {
      url: "./images/sliderImg6.png",
    },
    {
      url: "./images/sliderImg7.png",
    },
    {
      url: "./images/sliderImg8.png",
    },
  ];




function App() {
  return (
    <div className={styles.mainContainer}>
      <AddsBar />
      <Header />
      <div className={styles.slidesContainer}>
        <ImageSlider slides={slides} />
      </div>
      <TopicTitle title="Featured" />
      <div className={styles.productsCardsContainer}>
        {data.map((item) => (
          <ProductCard {...item} />
        ))}
      </div>
      <AboutMatter />
      <Explore />
      <Shop />
      <RecommendedVideos />
      <div className={styles.asSeenOnContainer}>
        <TopicTitle title="As Seen On" />
        <AsSeenOn />
      </div>
      <Footer />
    </div>
  );
}

export default App;
