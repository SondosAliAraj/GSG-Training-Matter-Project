import React from "react";
import { useLocation } from "react-router-dom";
import { productsArray } from "../PopupResponseData";
import ProductDetails from "../components/ProductDetails";
import styles from "./style.module.css";
import EdittedShopCard from "../components/Shop/EdittedShopCard";
import TopicTitle from "../components/TopicTitle";
import RecommendedVideoCard from "../components/RecommendedVideos/RecommendedVideoCard";
import RecommendedVideos from "../components/RecommendedVideos";
import AsSeenOnInstagram from "../components/AsSeenOnInstagram";
import ProductCard from "../components/ProductCard";
// import { productsContext } from "../components/context/productsContext";

const ProductDetailsPage = () => {
  const { products } = productsArray;
  const shopProductArray = [
    {
      img: "./images/pants.jpg",
    },
    {
      img: "./images/jumpsuits.jpg",
    },
    {
      img: "./images/tops.jpg",
    },
  ];

  console.log(shopProductArray[0]);
  // const [product, setProduct] = useState({});
  // setProduct(products);

  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  // const items = products.find((i) => i.id === productId);
  const item = products[productId];
  console.log("proooooooooo", item.id);
  console.log({ productId: productId });
  return (
    <>
      <div className={styles.container}>
        <ProductDetails
          {...item}
          // title={item.title}
          // images={item.images}
          // price={item.price}
          // description={item.description}
          // discountPercentage={item.discountPercentage}
          // rating={item.rating}
          // category={item.category}
          // stock={item.stock}
          // brand={item.brand}
        />
      </div>
      <img src="../images/sliderImg3.png" alt="" />
      <div className={styles.ParaContainer}>
        <p className={styles.firstP}>
          I have taste grilled meats around the world. Before i will guide you
          to the various technologies (gas barbecues, charcoal barbecues,
          Mongolian, sauces, recipes ) i will tell you about the Greek way.
        </p>
        <p className={styles.secondP}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className={styles.cardsContainer}>
        {shopProductArray.map((item) => {
          console.log(item);
          return <EdittedShopCard img={item} />;
        })}
      </div>
      <div className={styles.asSeenOnInContainer}>
        <p className={styles.secondP}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <TopicTitle title="As Seen On Instagram" />
      <AsSeenOnInstagram />

      <div className={styles.asSeenOnContainer}>
        <TopicTitle title="You may also like" />
        <div className={styles.productsCardsContainer}>
          {products.slice(0, 4).map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
