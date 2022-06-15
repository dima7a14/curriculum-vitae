import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import '../styles/globals.css';

function CVApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component pageProps={pageProps} />
		</Layout>
	);
}

CVApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
};

export default CVApp;
