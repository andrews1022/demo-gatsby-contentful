import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import type { IGatsbyImageData } from "gatsby-plugin-image";

type BannerProps = {
  content: {
    backgroundImage: {
      gatsbyImageData: IGatsbyImageData;
    };
    componentToRender: {
      name: string;
    };
    copy: {
      copy: string;
    };
    id: string;
    title: string;
  };
};

const Banner = ({ content }: BannerProps) => {
  // console.log('Banner content', content);

  const styles = { border: "2px solid green", padding: "1rem" };

  return (
    <div style={styles}>
      <h2>{content.title}</h2>
      <p>{content.copy.copy}</p>

      <GatsbyImage image={content.backgroundImage.gatsbyImageData} alt="contentful demo" />
    </div>
  );
};

export default Banner;
