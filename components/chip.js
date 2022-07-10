import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Chip({ children, className }) {
	return (
		<span
			className={clsx(
				'px-2 py-1 rounded-full font-semibold text-xs align-center transition duration-200 ease cursor-default uppercase',
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
