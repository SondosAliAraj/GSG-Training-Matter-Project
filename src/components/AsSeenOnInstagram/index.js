import React from "react";
import { videosArray } from "../../Response";
import RecommendedVideoCard from "../RecommendedVideos/RecommendedVideoCard";
import styles from "./style.module.css";
const AsSeenOnInstagram = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.recommendedVideosContainer}>
        {videosArray.map((item) => (
          <RecommendedVideoCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default AsSeenOnInstagram;
