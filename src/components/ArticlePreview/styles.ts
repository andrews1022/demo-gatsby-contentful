import styled from 'styled-components';

export const ArticleList = styled.ul`
	display: grid;
	grid-gap: 48px;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	list-style: none;
	margin: 0;
	padding: 0;
`;
