---
title: How to add blogs?
tags: [robocup,soccersimulation]
authors: [nader-zare-ec]
---

To add a blog, you need to create a new markdown file in the `blog/year/` directory.

<!-- truncate -->

For example, to add a blog for the year 2024, create a new markdown file in the `blog/2024/` directory.

To add tags to your blog, add the `tags` field in the front matter of the markdown file, and if the tags do not exist, create a new tag in the `blog/tags.yml` file.

To add authors to your blog, add the `authors` field in the front matter of the markdown file, and if the authors do not exist, create a new author in the `blog/authors.yml` file. You can have multiple authors for a blog. Also, an author can have multiple author roles. For example, if you are member of the organization committee and also a team leader, you can have two author roles. To add author roles, you need to create a new author in the `blog/authors.yml` file.

The blog markdown file should contain the following front matter:

```markdown
---
title: How to add blogs?
tags: [robocup,soccersimulation]
authors: [nader-zare-ec]
---
Abstract of the blog goes here.

<!-- truncate -->

Content of the blog goes here.
```

To add the blog into the homepage, you need to do the following:

- set the `homepage` field to `true` in the front matter of the markdown file.
- set the `img` field to the image file name in the `static/img/blog/` directory.
- set the `shortTitle` field to the short title of the blog.
- set the `description` field to the description of the blog.

For example, to add a blog for the year 2024, create a new markdown file in the `blog/2024/` directory.

To add the blog into the homepage, add the following front matter to the markdown file:

```markdown
---
title: How to add blogs?
tags: [robocup,soccersimulation]
authors: [nader-zare-ec]
homepage: true
img: howtoaddblogs.png
shortTitle: How to add blogs?
description: Learn how to add blogs to the RoboCup Soccer Simulation 2D League website.
---
Abstract of the blog goes here.

<!-- truncate -->

Content of the blog goes here.
```
