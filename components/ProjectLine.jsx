import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function ProjectLine({ title, children, className = '' }) {
	return (
		<div>
			<div className="text-sky-700 dark:text-purple-300 font-cursive-2 text-lg mb-2">
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
