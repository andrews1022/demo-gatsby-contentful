import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export const Hero = styled.div`
	align-items: flex-end;
	display: flex;
	margin: 0 auto;
	max-width: 80rem;
	min-height: 200px;
	padding: 0 0 24px;
	position: relative;

	@media (min-width: 768px) {
		padding-top: 24px;
	}
`;

export const Image = styled(GatsbyImage)`
	/* Ensure golden ratio for the hero size while limiting it to some extend to the viewport width */
	height: 61.8vh;
	max-height: 560px;
	width: 100%;

	@media (min-width: 1024px) {
		margin-left: auto;
		width: 85%;
	}
`;

export const Details = styled.div`
	background: #fff;
	left: 0;
	max-width: 40rem;
	width: 85%;
	padding: 24px 24px 0;
	position: absolute;

	@media (min-width: 480px) {
		padding-top: 48px;
	}

	@media (min-width: 768px) {
		max-width: 44rem;
		padding: 48px 24px 0;
	}

	@media (min-width: 1024px) {
		left: 24px;
		padding: 48px 24px 0 0;
	}
`;

export const Title = styled.h1`
	letter-spacing: -0.012em;
	font-size: 32px;
	font-weight: 800;
	line-height: 1;
	margin: 0 0 20px;
`;

export const Content = styled.p`
	font-size: 18px;
	font-weight: 600;
	margin: 0;
`;
