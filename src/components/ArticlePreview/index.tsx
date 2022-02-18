import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

// components
import Container from '../Container';
import Tags from '../Tags';

// styled components
import * as S from './styles';

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
			<S.ArticleList>
				{posts.map((post) => (
					<li key={post.slug}>
						<Link to={`/blog/${post.slug}`} className={styles.link}>
							<GatsbyImage alt='' image={post.heroImage.gatsbyImageData} />
							<h2 className={styles.title}>{post.title}</h2>
						</Link>

						<div dangerouslySetInnerHTML={{ __html: post.description.childMarkdownRemark.html }} />

						<div className={styles.meta}>
							<small className='meta'>{post.publishDate}</small>

							{post.tags.length ? <Tags tags={post.tags} /> : null}
						</div>
					</li>
				))}
			</S.ArticleList>
		</Container>
	);
};

export default ArticlePreview;
