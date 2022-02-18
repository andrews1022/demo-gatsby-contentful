import React from 'react';
import { Link, graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

// components
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Tags from '../components/Tags';

import * as styles from './blog-post.module.css';

// types
import type { NextPrevious, SingleBlogPost } from '../types/types';

type GraphQLResult = {
	contentfulBlogPost: SingleBlogPost;
	next: NextPrevious;
	previous: NextPrevious;
};

const BlogPostTemplate = ({ data, location }: PageProps<GraphQLResult>) => {
	console.log('DATA: ', data);

	const post = data.contentfulBlogPost;
	const previous = data.previous;
	const next = data.next;

	return (
		<Layout location={location}>
			<Seo title={post.title} description={post.description.childMarkdownRemark.excerpt} />
			<Hero
				image={post.heroImage?.gatsbyImageData}
				title={post.title}
				content={post.description?.childMarkdownRemark?.excerpt}
			/>
			<div className={styles.container}>
				<span className={styles.meta}>
					{post.author?.name} &middot; <time dateTime={post.rawDate}>{post.publishDate}</time> –{' '}
					{post.body?.childMarkdownRemark?.timeToRead} minute read
				</span>

				<div className={styles.article}>
					<div
						className={styles.body}
						dangerouslySetInnerHTML={{
							__html: post.body?.childMarkdownRemark?.html
						}}
					/>

					{post.tags.length ? <Tags tags={post.tags} /> : null}

					{(previous || next) && (
						<nav>
							<ul className={styles.articleNavigation}>
								{previous && (
									<li>
										<Link to={`/blog/${previous.slug}`} rel='prev'>
											← {previous.title}
										</Link>
									</li>
								)}
								{next && (
									<li>
										<Link to={`/blog/${next.slug}`} rel='next'>
											{next.title} →
										</Link>
									</li>
								)}
							</ul>
						</nav>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!, $previousPostSlug: String, $nextPostSlug: String) {
		contentfulBlogPost(slug: { eq: $slug }) {
			slug
			title
			author {
				name
			}
			publishDate(formatString: "MMMM Do, YYYY")
			rawDate: publishDate
			heroImage {
				gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
				resize(height: 630, width: 1200) {
					src
				}
			}
			body {
				childMarkdownRemark {
					html
					timeToRead
				}
			}
			tags
			description {
				childMarkdownRemark {
					excerpt
				}
			}
		}
		previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
			slug
			title
		}
		next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
			slug
			title
		}
	}
`;