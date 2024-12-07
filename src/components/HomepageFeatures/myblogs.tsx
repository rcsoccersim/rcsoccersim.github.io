import { usePluginData } from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";
import React from "react";
import useGlobalData from "@docusaurus/useGlobalData";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type NewsItem = {
  title: string;
  link: string;
  year: number;
  date: number;
  fileLink: string;
};

function getYear(link: string): number {
  const parts = link.split("/");
  if (parts.length >= 3) {
    return parseInt(parts[2]);
  }
  return 0;
}

function getNewsItems(): NewsItem[] {
  const globalData = useGlobalData();
  const posts = globalData["blog-list-plugin"].default.posts;
  console.log(posts);
  let newsList: NewsItem[] = posts.map((post: any) => {
    return {
      title: post.title,
      fileLink: post.fileLink,
      link: post.permalink,
      year: getYear(post.fileLink),
      date: post.date,
    };
  });

  // newsList.sort((a, b) => b.year - a.year);
  newsList.sort((a, b) => b.date - a.date);
  console.log("newsList");
  console.log(newsList);

  return newsList.slice(0, 10);
}

function News() {
  let newsList = getNewsItems();
  return (
    <section style={{ width: "100%" }}>
      <h1 className="newsHeader">Recent News</h1>
      <ul>
        {newsList.map((item, idx) => (
          <li key={idx} className="listItem">
            <a className="newsLink" href={item.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default News;
