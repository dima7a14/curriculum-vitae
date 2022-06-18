import React from 'react';

import Logo from './logo';
import Menu from './menu';

function Header() {
	return (
		<nav className="bg-white dark:bg-gray-800 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5">
			<div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="w-full justify-start flex items-center">
						<Logo />
						<div className="flex-1 ml-4 text-gray-800 dark:text-white font-semibold">
							Dima Danyliuk
						</div>
						<Menu />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
