import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

type PersonProps = {
  content: {
    componentToRender: {
      name: string;
    };
    id: string;
    image: {
      gatsbyImageData: IGatsbyImageData;
    };
    name: string;
  };
};

const Person = ({ content }: PersonProps) => {
  // console.log('Person content', content);

  const styles = { border: '2px solid blue', padding: '1rem' };

  return (
    <div style={styles}>
      <h2>{content.name}</h2>
      <GatsbyImage image={content.image.gatsbyImageData} alt='contentful demo' />
    </div>
  );
};

export default Person;
