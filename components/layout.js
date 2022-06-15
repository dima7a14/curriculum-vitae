import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

function Layout({ children }) {
	return (
		<div className="h-screen bg-gray-200 dark:bg-black overflow-hidden">
			<Header />
			<div className="max-w-7xl h-full overflow-auto mx-auto p-8">
				{children}
			</div>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
