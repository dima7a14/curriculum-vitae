import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import getLevelColors from '../utils/getLevelColors';
import Chip from './chip';

function Technology({ level, name, Icon, className, iconClassName }) {
	const colors = getLevelColors(level);

	return (
		<Chip
			className={clsx(
				'text-white dark:text-white flex flex-row flex-nowrap space-x-2 items-center',
				colors.bg,
				colors.border,
				className
			)}
		>
			{Icon && (
				<Icon className={clsx('text-lg rounded', iconClassName)} />
			)}
			<span>{name}</span>
		</Chip>
	);
}

Technology.propTypes = {
	level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
	name: PropTypes.string.isRequired,
	Icon: PropTypes.func,
	className: PropTypes.string,
	iconClassName: PropTypes.string,
};

export default Technology;
