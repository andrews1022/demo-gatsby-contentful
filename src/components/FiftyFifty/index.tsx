import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

type FiftyFiftyProps = {
	content: {
		componentToRender: {
			name: string;
		};
		copy: {
			copy: string;
		};
		heading: string;
		id: string;
		image: {
			gatsbyImageData: IGatsbyImageData;
		};
	};
};

const FiftyFifty = ({ content }: FiftyFiftyProps) => {
	// console.log('FiftyFifty content', content);

	const styles = { border: '2px solid red', padding: '1rem' };

	return (
		<div style={styles}>
			<div>
				<h2>{content.heading}</h2>
				<p>{content.copy.copy}</p>
			</div>

			<div>
				<GatsbyImage image={content.image.gatsbyImageData} alt='contentful demo' />
			</div>
		</div>
	);
};

export default FiftyFifty;
