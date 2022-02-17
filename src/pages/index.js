import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ArticlePreview from '../components/article-preview';

const Home = ({ data, location }) => {
	const posts = data.allContentfulBlogPost.nodes;
	const [author] = data.allContentfulPerson.nodes;

	return (
		<Layout location={location}>
			<Hero
				image={author.heroImage.gatsbyImageData}
				title={author.name}
				content={author.shortBio.shortBio}
			/>
			<ArticlePreview posts={posts} />
		</Layout>
	);
};

export default Home;

export const pageQuery = graphql`
	query HomeQuery {
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
		allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
			nodes {
				name
				shortBio {
					shortBio
				}
				title
				heroImage: image {
					gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
				}
			}
		}
	}
`;
