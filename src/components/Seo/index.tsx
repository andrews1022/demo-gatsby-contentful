import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Meta = {
	name: string;
	content: string;
};

// props
type SeoProps = {
	description?: string;
	lang?: string;
	meta?: Meta[];
	title: string;
};

const Seo = ({ title, description = '', lang = 'en', meta = [] }: SeoProps) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const defaultTitle = site.siteMetadata?.title;

	return (
		<Helmet
			htmlAttributes={{ lang }}
			title={title}
			defaultTitle={defaultTitle}
			titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
			meta={[
				{
					name: `description`,
					content: metaDescription
				},
				{
					property: `og:title`,
					content: title
				},
				{
					property: `og:description`,
					content: metaDescription
				},
				{
					property: `og:type`,
					content: `website`
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata?.social?.twitter || ``
				},
				{
					name: `twitter:title`,
					content: title
				},
				{
					name: `twitter:description`,
					content: metaDescription
				}
			].concat(meta)}
		/>
	);
};

export default Seo;
