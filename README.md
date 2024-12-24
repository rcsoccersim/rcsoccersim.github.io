# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# How to change website content
 
### How to add news
To add a news, you need to create a new markdown file in the `blog/year/` directory.

<!-- truncate -->

For example, to add a news for the year 2024, create a new markdown file in the `blog/2024/` directory.

To add tags to your news, add the `tags` field in the front matter of the markdown file, and if the tags do not exist, create a new tag in the `blog/tags.yml` file.

To add authors to your news, add the `authors` field in the front matter of the markdown file, and if the authors do not exist, create a new author in the `blog/authors.yml` file. You can have multiple authors for a news. Also, an author can have multiple author roles. For example, if you are member of the organization committee and also a team leader, you can have two author roles. To add author roles, you need to create a new author in the `blog/authors.yml` file.

The news markdown file should contain the following front matter:

```markdown
---
title: How to add news?
tags: [robocup,soccersimulation]
authors: [nader-zare-ec]
---
Abstract of the news goes here.

<!-- truncate -->

Content of the news goes here.
```

To add the news into the homepage, you need to do the following:

- set the `addToHomepage` field to `true` in the front matter of the markdown file.
- set the `homePageImage` field to the image file name in the `static/img/blog/` directory.
- set the `homePageTitle` field to the short title of the news.
- set the `description` field to the description of the news.

For example, to add a news for the year 2024, create a new markdown file in the `blog/2024/` directory.

To add the news into the homepage, add the following front matter to the markdown file:

```markdown
---
title: How to add news?
tags: [robocup,soccersimulation]
authors: [nader-zare-ec]
addToHomepage: true
homePageImage: howtoaddnews.png
homePageTitle: How to add news?
description: Learn how to add news to the RoboCup Soccer Simulation 2D League website.
---
Abstract of the news goes here.

<!-- truncate -->

Content of the news goes here.
```
