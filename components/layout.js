import { Layout as AntdLayout } from 'antd';

import Header from '../components/header';

const { Footer, Content } = AntdLayout;

function Layout({ children }) {
	return (
		<AntdLayout>
			<Header />
			<Content>{children}</Content>
			<Footer>&copy; 2022</Footer>
		</AntdLayout>
	);
}

export default Layout;
