const fs = require("fs");
const path = require("path");
const globby = require("globby");
const matter = require("gray-matter");

function getDescription(data, content) {
  try {
    if (data.description) {
      return data.description;
    }
    // after --- and before <!-- truncate -->
    var desc = content.split("---")[2];
    desc = desc.split("<!-- truncate -->")[0];
    desc = desc.replace(/<[^>]*>?/gm, "");
    desc = desc.replace(/\n/g, " ");
    desc = desc.replace(/\s+/g, " ").trim();
    desc = desc.substring(0, 160);
    desc = desc + "...";
    return desc;
  } catch (e) {
    return "";
  }
}

function getHomeImage(data) {
  var image = data.homePageImage || null;
  if (image) {
    if (image.startsWith("http")) {
      image = image;
    } else {
      image = "img/blog/" + image;
      // check image exists
      if (!fs.existsSync(path.join("./static/", image))) {
        console.log("Image not found: " + image);
        image = null;
      }
    }
  }
  return image;
}

function getHomePageTitle(data) {
  var homePageTitle = data.homePageTitle;
  if (homePageTitle) {
    return homePageTitle;
  }
  return data.title.substring(0, 50) + "...";
}

function shouldBeOnHomePage(data, image, shortTitle, description) {
  var addToHomepage = data.addToHomepage || false;
  if (!image || !shortTitle || !description) {
    addToHomepage = false;
  }
  return addToHomepage;
}

module.exports = function () {
  return {
    name: "blog-list-plugin",
    async loadContent() {
      const blogDir = path.resolve(__dirname, "../blog");
      const filePaths = await globby(["**/*.{md,mdx}"], { cwd: blogDir });

      const posts = filePaths.map((relativePath) => {
        const fullPath = path.join(blogDir, relativePath);
        const content = fs.readFileSync(fullPath, "utf-8");
        const date = new Date(fs.statSync(fullPath).mtime);
        const { data } = matter(content);
        var homePageImage = getHomeImage(data);
        var description = getDescription(data, content);
        var homePageTitle = getHomePageTitle(data);
        var addToHomepage = shouldBeOnHomePage(data, homePageImage, homePageTitle, description);
        return {
          title: data.title,
          fileLink: `/blog/${relativePath.replace(/\.(md|mdx)$/, "")}`,
          description: description, // Add description
          date: date, // Add date
          author: data.author, // Add author
          tags: data.tags || [], // Add tags
          permalink: `/blog/${
            data.slug || relativePath.replace(/\.(md|mdx)$/, "")
          }`, // Add slug
          addToHomepage: addToHomepage,
          homePageImage: homePageImage,
          homePageTitle: homePageTitle,
        };
      });
      console.log(posts);
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