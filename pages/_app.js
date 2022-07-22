import React from 'react';
import PropTypes from 'prop-types';
import { LazyMotion, m, domAnimation, AnimatePresence } from 'framer-motion';

import Layout from '../components/layout';
import '../styles/globals.css';

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

function CVApp({ Component, pageProps, router }) {
	return (
		<Layout>
			<LazyMotion features={domAnimation}>
				<AnimatePresence exitBeforeEnter>
					<m.div
						key={router.route}
						variants={animation.variants}
						transition={animation.transition}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<Component {...pageProps} />
					</m.div>
				</AnimatePresence>
			</LazyMotion>
		</Layout>
	);
}

CVApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
	router: PropTypes.shape({
		route: PropTypes.string.isRequired,
	}).isRequired,
};

export default CVApp;
