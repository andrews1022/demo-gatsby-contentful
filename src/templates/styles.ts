import styled from 'styled-components';

export const Meta = styled.span`
	font-family: 'Times New Roman', Times, serif;
	font-size: 18px;
	font-style: italic;
	margin: 0 auto 1em;
	max-width: 80rem;
	padding-bottom: 24px;
	padding-left: 24px;
	position: relative;
	top: -1em;
`;

export const Article = styled.article`
	display: grid;
	font-size: 16px;
	gap: 20px;
	letter-spacing: -0.011em;
	line-height: 1.75;
	padding: 24px 24px calc(24px * 2);

	h2:first-of-type {
		margin-top: 0;
	}

	a {
		border-bottom: 1.5px solid currentColor;
		font-weight: 500;

		&:hover {
			border-bottom-color: transparent;
			color: #4a90e2;
		}
	}

	p {
		margin-bottom: 1.5em;
		margin-top: 0;
	}

	h1,
	h2 {
		font-size: 24px;
		margin-top: 48px;
	}

	h3,
	h4,
	h5,
	h6 {
		font-size: 16px;
		font-weight: 600;
		margin-bottom: 0.5em;
		margin-top: 3em;
	}

	li {
		margin-bottom: 0.5em;
	}
`;

export const Body = styled.div`
	max-width: 48rem;
`;

export const Navigation = styled.nav`
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		list-style: none;
		padding: 0;
	}
`;
