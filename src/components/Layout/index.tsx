import React from 'react';
import type { ReactNode } from 'react';
import type { WindowLocation } from '@reach/router';

import '../variables.css';
import '../global.css';

// components
import Footer from '../Footer';
import Navigation from '../Navigation';
import Seo from '../Seo';

type LayoutProps = {
	children: ReactNode;
	location: WindowLocation;
};

const Layout = ({ children, location }: LayoutProps) => {
	return (
		<>
			<Seo />
			<Navigation />
			<main className='test'>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
