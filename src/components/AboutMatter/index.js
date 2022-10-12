import React from "react";
import TopicTitle from "../TopicTitle";
import styles from "./style.module.css";

const AboutMatter = () => {
  const countries = ["India", "China", "Sri Lanka"];
  return (
    <div className={styles.mainContainer}>
      <TopicTitle title="About Matter" />
      <div className={styles.aboutMatterContainer}>
        <div>
          <img
            className={styles.aboutMatterImg}
            src="./images/AboutMatterImg.png"
            alt="about matter"
          />
        </div>
        <div className={styles.description}>
          <p id={styles.firstParagraph}>
            Our mission is threefold - to foster designer-artisan
            collaborations, inspire consumers to value provenance and process,
            and pioneer industry change and sustainability for rural textile
            communities.
          </p>
          <p id={styles.secondParagraph}>
            artisan employment days created.
            <br />
            123456
            <br />
            countries involved to date
          </p>
          <div className={styles.countriesList}>
            {countries.map((item) => (
              <div>{item}</div>
            ))}
          </div>
          <p id={styles.designer}>
            #MATTERTRIBE
            <br />
            12 Designers
            <br />
            12 Factories
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMatter;
