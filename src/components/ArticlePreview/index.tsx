import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Container from '../Container';
import Tags from '../Tags';

import * as styles from './article-preview.module.css';

// types
import type { BlogPost } from '../../types/types';

// props
type ArticlePreviewProps = {
	posts: BlogPost[];
};

const ArticlePreview = ({ posts }: ArticlePreviewProps) => {
	if (!posts) return null;
	if (!Array.isArray(posts)) return null;

	return (
		<Container>
			<ul className={styles.articleList}>
				{posts.map((post) => {
					return (
						<li key={post.slug}>
							<Link to={`/blog/${post.slug}`} className={styles.link}>
								<GatsbyImage alt='' image={post.heroImage.gatsbyImageData} />
								<h2 className={styles.title}>{post.title}</h2>
							</Link>

							<div
								dangerouslySetInnerHTML={{
									__html: post.description.childMarkdownRemark.html
								}}
							/>

							<div className={styles.meta}>
								<small className='meta'>{post.publishDate}</small>

								{post.tags.length ? <Tags tags={post.tags} /> : null}
							</div>
						</li>
					);
				})}
			</ul>
		</Container>
	);
};

export default ArticlePreview;
