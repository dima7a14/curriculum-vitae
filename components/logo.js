import React from 'react';
import NextLink from 'next/link';
import { FiCoffee } from 'react-icons/fi';

function Logo() {
	return (
		<NextLink href="/">
			<a className="drop-shadow-2xl px-2 py-2 text-5xl text-gray-800 dark:text-white">
				<FiCoffee />
			</a>
		</NextLink>
	);
}

export default Logo;
