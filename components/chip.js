import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Chip({ children, className }) {
	return (
		<span
			className={clsx(
				'px-2 py-1 rounded-full text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-800 border border-gray-800 dark:border-white font-semibold text-xs align-center transition duration-200 ease hover:bg-gray-400 dark:hover:bg-gray-600 cursor-default uppercase',
				className
			)}
		>
			{children}
		</span>
	);
}

Chip.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

Chip.defaultProps = {
	className: '',
};

export default Chip;
