import 'antd/dist/antd.css';

import Layout from '../components/layout';

function CVApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component pageProps={pageProps} />
		</Layout>
	);
}

export default CVApp;
