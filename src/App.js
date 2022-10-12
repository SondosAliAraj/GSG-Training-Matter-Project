import styles from "./App.module.css";
import { data } from "./Response";
import { videosArray } from "./Response";
import AddsBar from "./components/AddsBar";
import Header from "./components/Header";
import SliderProductsBody from "./components/SliderProductsBody";
import ProductCard from "./components/ProductCard";
import AboutMatter from "./components/AboutMatter";
import Explore from "./components/Explore";
import TopicTitle from "./components/TopicTitle";
import Shop from "./components/Shop";
import RecommendedVideo from "./components/RecommendedVideos/RecommendedVideoCard";
import RecommendedVideos from "./components/RecommendedVideos";
import AsSeenOn from "./components/AsSeenOn";
import ProductViewer from "./components/ProductViewer";
import Categories from "./components/Footer/FooterList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.mainContainer}>
      <AddsBar />
      <Header />
      <SliderProductsBody />
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
      <Footer/>
    </div>
  );
}

export default App;
