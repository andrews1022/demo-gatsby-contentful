import { Link } from 'gatsby';
import styled from 'styled-components';

export const ArticleList = styled.ul`
	display: grid;
	grid-gap: 48px;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
`;

export const Title = styled.h2`
	display: inline-block;
	font-size: 18px;
	margin-bottom: 0;
	margin-top: 16px;
	border-bottom: 1.5px solid transparent;
`;

export const Meta = styled.div`
	display: flex;
	justify-content: space-between;
`;
