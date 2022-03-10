import React from 'react';

// styled components
import * as S from './styles';

// props
type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => (
  <S.Tags>
    {tags.map((tag) => (
      <S.Tag key={tag}>{tag}</S.Tag>
    ))}
  </S.Tags>
);

export default Tags;
