import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function getButtonColors(variant) {
	let buttonColors = '';

	switch (variant) {
		case 'primary': {
			buttonColors =
				'bg-sky-300 dark:bg-purple-900 hover:bg-sky-200 dark:hover:bg-purple-800 text-gray-800 dark:text-white shadow';
			break;
		}
		case 'secondary': {
			buttonColors =
				'bg-emerald-300 dark:bg-cyan-900 hover:bg-emerald-200 dark:hover:bg-cyan-800 text-gray-800 dark:text-white shadow';
			break;
		}
		case 'success': {
			buttonColors =
				'bg-green-300 dark:bg-green-600 hover:bg-green-200 dark:hover:bg-green-500 text-gray-800 dark:text-white shadow';
			break;
		}
		case 'warning': {
			buttonColors =
				'bg-orange-400 dark:bg-orange-700 hover:bg-orange-300 dark:hover:bg-orange-600 text-gray-800 dark:text-white shadow';
			break;
		}
		case 'danger': {
			buttonColors =
				'bg-red-500 dark:bg-red-900 hover:bg-red-400 dark:hover:bg-red-800 text-gray-800 dark:text-white shadow';
			break;
		}
		case 'info': {
			buttonColors =
				'bg-indigo-400 dark:bg-indigo-900 hover:bg-indigo-300 dark:hover:bg-indigo-800 text-gray-800 dark:text-white shadow';
			break;
		}
		case 'outline': {
			buttonColors = '';
			break;
		}
		case 'default':
		default: {
			buttonColors =
				'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white shadow';
		}
	}

	return buttonColors;
}

const Button = forwardRef(
	(
		{
			children,
			type = 'button',
			className = '',
			variant = 'default',
			onClick = () => null,
			href,
			disabled = false,
			...other
		},
		ref
	) => {
		const buttonColors = getButtonColors(variant);
		const btnClassName = clsx(
			'font-semibold text-center text-lg md:text-xl transition duration-200 ease no-underline',
			buttonColors,
			disabled && 'opacity-50 cursor-not-allowed',
			className
		);

		if (type === 'link') {
			return (
				<a
					ref={ref}
					className={btnClassName}
					onClick={onClick}
					role="button"
					tabIndex="0"
					href={href}
					{...other}
				>
					{children}
				</a>
			);
		}

		return (
			<button
				ref={ref}
				type={type}
				className={btnClassName}
				onClick={onClick}
				disabled={disabled}
				{...other}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';

Button.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.oneOf(['button', 'submit', 'reset', 'link']),
	className: PropTypes.string,
	variant: PropTypes.oneOf([
		'primary',
		'secondary',
		'successful',
		'warning',
		'danger',
		'info',
		'default',
		'outline',
	]),
	onClick: PropTypes.func,
	href: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Button;
