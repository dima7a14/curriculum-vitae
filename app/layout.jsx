'use client';

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { LazyMotion, m, domAnimation, AnimatePresence } from 'framer-motion';

import Header from '../components/header';
import ScrollTop from '../components/scroll-top';
import '../styles/globals.css';
import styles from '../styles/layout.module.css';

const animation = {
	variants: {
		initial: {
			opacity: 0,
			top: '100vh',
			scale: 0.4,
		},
		animate: {
			opacity: 1,
			top: '0vh',
			scale: 1,
		},
		exit: {
			opacity: 0,
			top: '100vh',
			scale: 0.4,
		},
	},
	transition: {
		duration: 0.4,
	},
};

function Layout({ children }) {
	return (
		<html lang="en">
			<body>
				<div
					className={clsx(
						'min-h-screen bg-gradient-to-br from-gray-100 via-sky-300 to-purple-300 dark:from-red-800 dark:via-purple-900 dark:to-sky-800 animate-gradient overflow-hidden',
						styles.bg
					)}
				>
					<Header />
					<div className="max-w-full mx-auto p-8">
						<LazyMotion features={domAnimation}>
							<AnimatePresence exitBeforeEnter>
								<m.div
									variants={animation.variants}
									transition={animation.transition}
									initial="initial"
									animate="animate"
									exit="exit"
								>
									{children}
								</m.div>
							</AnimatePresence>
						</LazyMotion>
					</div>
					<ScrollTop />
				</div>
			</body>
		</html>
	);
}

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
