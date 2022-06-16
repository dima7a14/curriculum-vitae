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
	...anchorProps
}) {
	return (
		<Link {...{ href, as, replace, scroll, shallow, prefetch, locale }}>
			<a {...anchorProps}>{children}</a>
		</Link>
	);
}

LinkTo.propTypes = {
	children: PropTypes.element.isRequired,
	href: PropTypes.string.isRequired,
	as: PropTypes.string,
	replace: PropTypes.bool,
	scroll: PropTypes.bool,
	shallow: PropTypes.bool,
	passHref: PropTypes.bool,
	locale: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	prefetch: PropTypes.bool,
};

export default LinkTo;
