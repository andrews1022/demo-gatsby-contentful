import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

// components
import Tags from '../Tags';

// styled components
import * as S from './styles';
import { Container } from '../UI/Container';

// types
import type { BlogPost } from '../../types/types';

// props
type ArticlePreviewProps = {
  posts: BlogPost[];
};

const ArticlePreview = ({ posts }: ArticlePreviewProps) => {
  if (!posts || !Array.isArray(posts)) return null;

  return (
    <Container>
      <S.ArticleList>
        {posts.map((post) => (
          <li key={post.slug}>
            <S.StyledLink to={`/blog/${post.slug}`}>
              <GatsbyImage alt='' image={post.heroImage.gatsbyImageData} />
              <S.Title>{post.title}</S.Title>
            </S.StyledLink>

            <div dangerouslySetInnerHTML={{ __html: post.description.childMarkdownRemark.html }} />

            <S.Meta>
              <small>{post.publishDate}</small>

              {post.tags.length ? <Tags tags={post.tags} /> : null}
            </S.Meta>
          </li>
        ))}
      </S.ArticleList>
    </Container>
  );
};

export default ArticlePreview;
