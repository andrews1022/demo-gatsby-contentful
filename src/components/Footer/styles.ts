import styled from 'styled-components';

export const Footer = styled.footer`
	border-top: 1px solid rgba(0, 0, 0, 0.05);
	font-size: 14px;
	margin-top: 24px;
	padding: 24px 0;
	text-align: right;

	a {
		border-bottom: 1.5px solid transparent;
		font-weight: 500;

		&:hover {
			border-bottom-color: #4a90e2;
			color: #4a90e2;
		}
	}
`;
