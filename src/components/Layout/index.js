import React from 'react';

import '../variables.css';
import '../global.css';

// components
import Footer from '../Footer';
import Navigation from '../Navigation';
import Seo from '../Seo';

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
