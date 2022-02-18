import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

// components
import ArticlePreview from '../components/ArticlePreview';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

// types
import type { BlogPost } from '../types/types';

type GraphQLResult = {
	allContentfulBlogPost: {
		nodes: BlogPost[];
	};
};

const BlogIndex = ({ data, location }: PageProps<GraphQLResult>) => {
	const posts = data.allContentfulBlogPost.nodes;

	return (
		<Layout location={location}>
			<Seo title='Blog' />
			<Hero title='Blog' />
			<ArticlePreview posts={posts} />
		</Layout>
	);
};

export default BlogIndex;

export const pageQuery = graphql`
	query BlogIndexQuery {
		allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
			nodes {
				title
				slug
				publishDate(formatString: "MMMM Do, YYYY")
				tags
				heroImage {
					gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
				}
				description {
					childMarkdownRemark {
						html
					}
				}
			}
		}
	}
`;
