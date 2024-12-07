import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";
import useGlobalData from "@docusaurus/useGlobalData";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  link?: string;
};

const FeatureList: FeatureItem[] = [];

function getHomeBlogs(): FeatureItem[] {
  const globalData = useGlobalData();
  const posts = globalData["blog-list-plugin"].default.posts;
  console.log(posts);
  let homePagePost: FeatureItem[] = posts
    .filter((post: any) => post.addToHomepage === true)
    .map((post: any) => {
      return {
        title: post.homePageTitle,
        image: post.homePageImage,
        description: post.description,
        link: post.permalink,
      };
    });

  console.log(homePagePost);

  return homePagePost;
}

function Feature({ title, image, description, link }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link}>
          <Heading as="h3">{title}</Heading>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FeatureBlogs() {
  var homePagePost = getHomeBlogs();
  // merge homePagePost with FeatureList
  var allFeatures = FeatureList.concat(homePagePost);

  return allFeatures.map((props, idx) => <Feature key={idx} {...props} />);
}
export default FeatureBlogs;
