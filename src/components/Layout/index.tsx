import React from 'react';
import type { ReactNode } from 'react';
import type { WindowLocation } from '@reach/router';
import { ThemeProvider } from 'styled-components';

import '../variables.css';
import '../global.css';

// components
import Footer from '../Footer';
import Navigation from '../Navigation';
import Seo from '../Seo';

// styled components
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';

type LayoutProps = {
	children: ReactNode;
	location: WindowLocation;
};

const Layout = ({ children, location }: LayoutProps) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Seo title='Gatsby Contentful Blog w/ TypeScript' />
		<Navigation />
		<main className='test'>{children}</main>
		<Footer />
	</ThemeProvider>
);

export default Layout;
