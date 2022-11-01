import { resolve } from "path";
import type { GatsbyNode } from "gatsby";

type GraphQLResult = {
  allContentfulBlogPost: {
    nodes: {
      slug: string;
      title: string;
    }[];
  };
  allContentfulDynamicPage: {
    nodes: {
      id: string;
      title: string;
      slug: string;
    }[];
  };
};

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = resolve("./src/templates/blog-post.tsx");
  const dynamicPageTemplate = resolve("./src/templates/dynamic-page.tsx");

  const result = await graphql<GraphQLResult>(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
        allContentfulDynamicPage {
          nodes {
            id
            title
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your Contentful posts`, result.errors);
    return;
  }

  if (!result.data) {
    throw new Error("Failed to get posts.");
  }

  const posts = result.data.allContentfulBlogPost.nodes;
  const dynamicPages = result.data.allContentfulDynamicPage.nodes;

  if (posts.length) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug;
      const nextPostSlug = index === posts.length - 1 ? null : posts[index + 1].slug;

      createPage({
        component: blogPost,
        context: {
          // data passed to context is available in page queries as graphql variables
          slug: post.slug,
          title: post.title,
          previousPostSlug,
          nextPostSlug
        },
        path: `/blog/${post.slug}/`
      });
    });
  }

  // try
  // make initial query get reference field
  // static query and get just ids
  // then build new graphql query using those ids
  if (dynamicPages.length) {
    dynamicPages.forEach((page) => {
      createPage({
        component: dynamicPageTemplate,
        context: {
          // data passed to context is available in page queries as graphql variables
          id: page.id
        },
        path: `/${page.slug}`
      });
    });
  }
};
