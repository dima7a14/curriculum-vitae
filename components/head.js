import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

function Head({ title = 'Curriculum Vitae' }) {
	return (
		<NextHead>
			<title>Dima Danyliuk - {title}</title>
		</NextHead>
	);
}

Head.propTypes = {
	title: PropTypes.string,
};

export default Head;
