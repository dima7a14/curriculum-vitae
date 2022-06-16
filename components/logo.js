import React from 'react';
import { FiCoffee } from 'react-icons/fi';

import LinkTo from './linkTo';

function Logo() {
	return (
		<LinkTo
			href="/"
			className="drop-shadow-2xl px-2 py-2 text-5xl text-gray-800 dark:text-white"
		>
			<FiCoffee />
		</LinkTo>
	);
}

export default Logo;
