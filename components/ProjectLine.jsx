import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function ProjectLine({ title, children, className = '' }) {
	return (
		<div className="md:flex md:flex-row md:flex-nowrap md:items-baseline md:space-x-4 md:mb-4 md:last:mb-0">
			<div className="text-sky-700 dark:text-purple-300 font-cursive-2 text-lg md:text-3xl mb-2 md:mb-0 md:flex-shrink-0 md:flex-grow-1 md:w-2/6 lg:w-3/12">
				{title}
			</div>
			<div className={clsx('text-center', className)}>{children}</div>
		</div>
	);
}

ProjectLine.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
