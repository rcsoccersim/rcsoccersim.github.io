
import { usePluginData } from '@docusaurus/useGlobalData';
import Link from '@docusaurus/Link';
import React from 'react';
import useGlobalData from '@docusaurus/useGlobalData';

type NewsItem = {
  title: string;
  link: string;
  year: number;
};

function getYear(link: string): number {
  const parts = link.split('/');
  if (parts.length >= 3) {
    return parseInt(parts[2]);
  }
}

function getNewsItems(): NewsItem[] {
  const blogData = usePluginData('docusaurus-plugin-content-blog');
  const globalData = useGlobalData();
  const posts = globalData['blog-list-plugin'].default.posts;
  console.log(posts);
  let newsList: NewsItem[] = posts.map((post: any) => {
    return {
      title: post.title,
      link: post.permalink,
      year: getYear(post.permalink),
    };
  });

  newsList.sort((a, b) => b.year - a.year);
  
  return newsList.slice(0, 10);
}

function News() {
  let newsList = getNewsItems();
  return (
    <section style={{ width: '100%'}}>
      <h1 className='newsHeader'>Latest News</h1>
      <ul>
        {newsList.map((item, idx) => (
          <li key={idx} className='newsLink'>
            <a className='newsLink'
            href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default News;