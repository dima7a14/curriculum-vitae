import { forwardRef } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const LinkTo = forwardRef(
	(
		{
			children,
			href,
			as,
			replace,
			scroll,
			shallow,
			prefetch,
			locale,
			passHref,
			className,
			component: Component,
			...anchorProps
		},
		ref
	) => {
		if (Component) {
			return (
				<Link
					ref={ref}
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
					legacyBehavior
				>
					<Component
						{...anchorProps}
						href={href}
						className={className}
					>
						{children}
					</Component>
				</Link>
			);
		}

		return (
			<Link
				ref={ref}
				{...{
					href,
					as,
					replace,
					scroll,
					shallow,
					prefetch,
					locale,
					passHref,
					className,
				}}
			>
				{children}
			</Link>
		);
	}
);

LinkTo.displayName = 'LinkTo';

LinkTo.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string.isRequired,
	className: PropTypes.string,
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
