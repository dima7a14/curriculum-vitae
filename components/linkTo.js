import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function LinkTo({
	children,
	href,
	as,
	replace,
	scroll,
	shallow,
	prefetch,
	locale,
	passHref,
	component: Component,
	...anchorProps
}) {
	if (Component) {
		return (
			<Link
				{...{
					href,
					as,
					replace,
					scroll,
					shallow,
					prefetch,
					locale,
					passHref,
				}}
			>
				<Component {...anchorProps} href={href}>
					{children}
				</Component>
			</Link>
		);
	}

	return (
		<Link
			{...{
				href,
				as,
				replace,
				scroll,
				shallow,
				prefetch,
				locale,
				passHref,
			}}
		>
			<a {...anchorProps}>{children}</a>
		</Link>
	);
}

LinkTo.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string.isRequired,
	as: PropTypes.string,
	replace: PropTypes.bool,
	scroll: PropTypes.bool,
	shallow: PropTypes.bool,
	passHref: PropTypes.bool,
	locale: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	prefetch: PropTypes.bool,
	component: PropTypes.func,
};

export default LinkTo;
