const fs = require('fs');
const path = require('path');
const globby = require('globby');
const matter = require('gray-matter');

module.exports = function () {
  return {
    name: 'blog-list-plugin',
    async loadContent() {
      const blogDir = path.resolve(__dirname, '../blog');
      const filePaths = await globby(['**/*.{md,mdx}'], { cwd: blogDir });

      const posts = filePaths.map((relativePath) => {
        const fullPath = path.join(blogDir, relativePath);
        const content = fs.readFileSync(fullPath, 'utf-8');
        const date = new Date(fs.statSync(fullPath).mtime);
        const { data } = matter(content);
        return {
          title: data.title,
          fileLink: `/blog/${relativePath.replace(/\.(md|mdx)$/, '')}`,
          description: data.description, // Add description
          date: date,               // Add date
          author: data.author,           // Add author
          tags: data.tags || [],         // Add tags
          permalink: `/blog/${data.slug || relativePath.replace(/\.(md|mdx)$/, '')}`, // Add slug
        };
      });

      // Sort posts by date, newest first
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      return posts;
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData({ posts: content });
    },
  };
};
