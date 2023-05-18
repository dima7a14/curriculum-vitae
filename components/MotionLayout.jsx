'use client';

import PropTypes from 'prop-types';
import { LazyMotion, m, domAnimation, AnimatePresence } from 'framer-motion';

const animation = {
	variants: {
		initial: {
			opacity: 0,
			y: 100,
			// scale: 0.4,
		},
		animate: {
			opacity: 1,
			y: 0,
			// scale: 1,
		},
		exit: {
			opacity: 0,
			y: '100%',
			// scale: 0.4,
		},
	},
	transition: {
		duration: 0.4,
	},
};

function MotionLayout({ children }) {
	return (
		<LazyMotion features={domAnimation}>
			<AnimatePresence exitBeforeEnter>
				<m.div
					variants={animation.variants}
					transition={animation.transition}
					initial="initial"
					animate="animate"
					exit="exit"
					className="relative w-full md:max-w-3xl md:mx-auto lg:max-w-7xl bg-white dark:bg-gray-800 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 rounded-lg text-black dark:text-white"
				>
					{children}
				</m.div>
			</AnimatePresence>
		</LazyMotion>
	);
}

MotionLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default MotionLayout;
