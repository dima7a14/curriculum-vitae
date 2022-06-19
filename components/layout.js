import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from '../styles/layout.module.css';
import Header from './header';

function Layout({ children }) {
	return (
		<div
			className={clsx(
				'h-screen bg-gradient-to-br from-gray-100 via-sky-300 to-purple-300 dark:from-red-800 dark:via-purple-900 dark:to-sky-800 animate-gradient overflow-hidden',
				styles.bg
			)}
		>
			<Header />
			<div className="max-w-full h-full overflow-auto mx-auto p-8">
				<section className="relative w-full px-6 py-12 bg-white dark:bg-gray-800 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl pt-4 sm:pt-6 lg:pt-8 lg:pb-12 rounded-lg">
					{children}
				</section>
			</div>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
