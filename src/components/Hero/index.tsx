import React from 'react';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

// styled components
import * as S from './styles';

// props
type HeroProps = {
  content?: string;
  image?: IGatsbyImageData;
  title: string;
};

const Hero = ({ content, image, title }: HeroProps) => (
  <S.Hero>
    {image ? <S.Image alt={title} image={image} /> : null}

    <S.Details>
      <S.Title>{title}</S.Title>

      {content ? <S.Content>{content}</S.Content> : null}
    </S.Details>
  </S.Hero>
);

export default Hero;
