import React from "react";
import { videosArray } from "../../Response";
import BlackButton from "../BlackButton";
import RecommendedVideoCard from "./RecommendedVideoCard";
import TopicTitle from "../TopicTitle";
import styles from "./style.module.css";
const RecommendedVideos = () => {
  return (
    <div className={styles.mainContainer}>
      <TopicTitle title="Recommended Videos" />
      <div className={styles.recommendedVideosContainer}>
        {videosArray.map((item) => (
          <RecommendedVideoCard {...item} />
        ))}
      </div>
      <div className={styles.btnContainer}>
        <BlackButton title="show more" />
      </div>
    </div>
  );
};

export default RecommendedVideos;
