import { resolve } from 'path';
import type { GatsbyNode } from 'gatsby';

type GraphQLResult = {
	allContentfulBlogPost: {
		nodes: {
			slug: string;
			title: string;
		}[];
	};
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	// Define a template for blog post
	const blogPost = resolve('./src/templates/blog-post.tsx');

	const result = await graphql<GraphQLResult>(
		`
			{
				allContentfulBlogPost {
					nodes {
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
		throw new Error('Failed to get posts.');
	}

	const posts = result.data.allContentfulBlogPost.nodes;

	if (posts.length > 0) {
		posts.forEach((post, index) => {
			const previousPostSlug = index === 0 ? null : posts[index - 1].slug;
			const nextPostSlug = index === posts.length - 1 ? null : posts[index + 1].slug;

			createPage({
				path: `/blog/${post.slug}/`,
				component: blogPost,
				context: {
					slug: post.slug,
					title: post.title,
					previousPostSlug,
					nextPostSlug
				}
			});
		});
	}
};
