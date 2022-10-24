import styles from "./App.module.css";
import { slides } from "./Response";
import AddsBar from "./components/AddsBar";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import AboutMatter from "./components/AboutMatter";
import Explore from "./components/Explore";
import TopicTitle from "./components/TopicTitle";
import Shop from "./components/Shop";
import RecommendedVideos from "./components/RecommendedVideos";
import AsSeenOn from "./components/AsSeenOn";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import { productsArray } from "./PopupResponseData";

function App() {
  const {products} = productsArray;
  return (
    <div className={styles.mainContainer}>
      {/* {productsArray.products.map((item) => (
        <QuickViewPopup {...item} />
      ))} */}
      <AddsBar />
      <Header />
      <div className={styles.slidesContainer}>
        <ImageSlider slides={slides} />
      </div>
      <TopicTitle title="Featured" />
      <div className={styles.productsCardsContainer}>
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
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
