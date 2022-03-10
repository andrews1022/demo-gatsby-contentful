import React, { lazy, Suspense } from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/Layout';
import { Container } from '../components/UI/Container';

type GraphQLResult = {
	contentfulDynamicPage: {
		title: string;
		pageContent: any;
	};
};

const DynamicPage = ({ data, location }: PageProps<GraphQLResult>) => {
	// console.log(data);

	const { pageContent, title } = data.contentfulDynamicPage;

	// current dynamic pages:
	// /about-us
	// /jobs

	return (
		<Layout location={location}>
			<Container>
				<h2>This is the {title} page</h2>

				{pageContent.map((content: any) => {
					// console.log(content);
					// console.log(content.componentToRender.name);

					const ComponentToRender = lazy(
						() => import(`../components/${content.componentToRender.name}/index`)
					);

					return (
						<div key={content.id}>
							<Suspense fallback={<div>Loading...</div>}>
								<ComponentToRender content={content} />
								<br />
							</Suspense>
						</div>
					);
				})}
			</Container>
		</Layout>
	);
};

export default DynamicPage;

// TRY: take data from page query below and build new query?

export const pageQuery = graphql`
	query ContentfulDynamicPageQuery($id: String!) {
		contentfulDynamicPage(id: { eq: $id }) {
			title
			pageContent {
				__typename
				... on Node {
					... on ContentfulBanner {
						id
						title
						copy {
							copy
						}
						backgroundImage {
							gatsbyImageData
						}
						componentToRender {
							name
						}
					}
					... on ContentfulFiftyFifty {
						id
						heading
						copy {
							copy
						}
						image {
							gatsbyImageData
						}
						componentToRender {
							name
						}
					}
					... on ContentfulPerson {
						id
						name
						image {
							gatsbyImageData
						}
						componentToRender {
							name
						}
					}
				}
			}
		}
	}
`;
