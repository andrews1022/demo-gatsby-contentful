import React from 'react';

import './variables.css';
import './global.css';
import Seo from './seo';
import Navigation from './navigation';
import Footer from './footer';

const Layout = ({ children, location }) => {
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
