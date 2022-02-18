import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type BlogPost = {
	title: string;
	slug: string;
	publishDate: string;
	tags: string[];
	heroImage: {
		gatsbyImageData: IGatsbyImageData;
	};
	description: {
		childMarkdownRemark: {
			html: string;
		};
	};
};

export type Person = {
	name: string;
	shortBio: {
		shortBio: string;
	};
	title: string;
	heroImage: {
		gatsbyImageData: IGatsbyImageData;
	};
};

export type SingleBlogPost = {
	author: {
		name: string;
	};
	body: {
		childMarkdownRemark: {
			html: string;
			timeToRead: number;
		};
	};
	description: {
		childMarkdownRemark: {
			excerpt: string;
		};
	};
	heroImage: {
		gatsbyImageData: IGatsbyImageData;
		resize: {
			src: string;
		};
	};
	publishDate: string;
	rawDate: string;
	slug: string;
	tags: string[];
	title: string;
};

export type NextPrevious = { slug: string; title: string } | null;
