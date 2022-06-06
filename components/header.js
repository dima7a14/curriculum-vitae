import { useMemo } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Layout, Menu, PageHeader } from 'antd';

import Logo from './logo';

import styles from '../styles/header.module.css';

const { Header: AntdHeader } = Layout;

const items = [
	{
		label: <NextLink href="/about">About</NextLink>,
		key: '/about',
	},
	{
		label: <NextLink href="/experience">Experience</NextLink>,
		key: '/experience',
	},
	{
		label: <NextLink href="/pets">Pet Projects</NextLink>,
		key: '/pets',
	},
];

function Header() {
	const router = useRouter();
	const defaultSelectedKeys = useMemo(() => {
		const keys = [];
		const item = items.find((item) => item.key === router.pathname);

		if (item) {
			keys.push(item.key);
		}

		return keys;
	}, [items]);

	console.log('router.pathname', router);
	console.log('defaultSelectedkeys', defaultSelectedKeys);

	return (
		<AntdHeader className={styles.headerContainer}>
			<Logo />
			<Menu
				className={styles.headerMenu}
				items={items}
				mode="horizontal"
				defaultSelectedKeys={defaultSelectedKeys}
			/>
		</AntdHeader>
	);
}

export default Header;
