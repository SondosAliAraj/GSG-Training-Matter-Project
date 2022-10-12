import React from "react";
import styles from "./style.module.css";
import PostCard from "./PostCard";
import {PostDataArray} from "./Response.js"
import BlackButton from "../BlackButton";
import TopicTitle from "../TopicTitle";

const Explore = () => {
 
  return (
    <div className={styles.mainContainer}>
      <TopicTitle title="Explore" />
      <div className={styles.exploreContainer}>
        {/* {PostDataArray.map(item => (
              <PostCard title={item.title}
                  description={item.description}
                image={item.image}/>
          ))} */}
        <div className={styles.firstPost}>
          <PostCard>
            <h3 className={styles.postTitle}>{PostDataArray[0].title}</h3>
            <p className={styles.postDescription}>
              {PostDataArray[0].description}
            </p>
            <img
              className={styles.postImage}
              src={PostDataArray[0].image}
              alt="post description img"
            />
          </PostCard>
        </div>

        <div className={styles.otherPostsContainer}>
          <PostCard>
            <h3 className={styles.rightPostTitle}>{PostDataArray[1].title}</h3>
            <p className={styles.rightPostDescription}>
              {PostDataArray[1].description}
            </p>
            <img
              className={styles.rightPostImage}
              src={PostDataArray[1].image}
            />
          </PostCard>

          <PostCard>
            <h3 className={styles.rightPostTitle1}>{PostDataArray[2].title}</h3>
            <p className={styles.rightPostDescription1}>
              {PostDataArray[2].description}
            </p>
            {/* <img
            className={styles.rightPostImage}
            src={PostDataArray[2].image}
          /> */}
          </PostCard>

          <PostCard>
            <h3 className={styles.rightPostTitle2}>{PostDataArray[3].title}</h3>
            <p className={styles.rightPostDescription2}>
              {PostDataArray[3].description}
            </p>
            {/* <img
            className={styles.rightPostImage}
            src={PostDataArray[3].image}
          /> */}
          </PostCard>

          <PostCard>
            <h3 className={styles.rightPostTitle1}>{PostDataArray[4].title}</h3>
            <img
              className={styles.rightPostImage}
              src={PostDataArray[4].image}
            />
          </PostCard>
        </div>
      </div>
      <BlackButton title="see the journal" />
    </div>
  );
};

export default Explore;
