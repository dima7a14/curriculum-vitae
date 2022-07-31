import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from '../styles/layout.module.css';
import Header from './header';
import ScrollTop from './scroll-top';

function Layout({ children }) {
	return (
		<div
			className={clsx(
				'min-h-screen bg-gradient-to-br from-gray-100 via-sky-300 to-purple-300 dark:from-red-800 dark:via-purple-900 dark:to-sky-800 animate-gradient overflow-hidden',
				styles.bg
			)}
		>
			<Header />
			<div className="max-w-full mx-auto p-8">{children}</div>
			<ScrollTop />
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
