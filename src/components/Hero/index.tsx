import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

import * as styles from './styles.module.css';

// props
type HeroProps = {
	content?: string;
	image?: IGatsbyImageData;
	title: string;
};

const Hero = ({ content, image, title }: HeroProps) => (
	<div className={styles.hero}>
		{image ? <GatsbyImage className={styles.image} alt={title} image={image} /> : null}

		<div className={styles.details}>
			<h1 className={styles.title}>{title}</h1>

			{content ? <p className={styles.content}>{content}</p> : null}
		</div>
	</div>
);

export default Hero;
