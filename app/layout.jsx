import PropTypes from 'prop-types';
import clsx from 'clsx';

import Header from '../components/Header';
import ScrollTop from '../components/ScrollTop';
import MotionLayout from '../components/MotionLayout';
import '../styles/globals.css';
import styles from '../styles/layout.module.css';

function Layout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>Dima Danyliuk - Curriculum Vitae</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<div
					className={clsx(
						'min-h-screen bg-gradient-to-br from-gray-100 via-sky-300 to-purple-300 dark:from-red-800 dark:via-purple-900 dark:to-sky-800 animate-gradient overflow-hidden',
						styles.bg
					)}
				>
					<Header />
					<div className="max-w-full mx-auto p-8">
						<MotionLayout>{children}</MotionLayout>
					</div>
					{/* <ScrollTop /> */}
				</div>
			</body>
		</html>
	);
}

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
