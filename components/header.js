import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import LinkTo from './linkTo';
import Logo from './logo';

const items = [
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Experience',
		href: '/experience',
	},
	{
		label: 'Pet Projects',
		href: '/pets',
	},
];

function Header() {
	const router = useRouter();
	const selectedItem = useMemo(
		() => items.find((i) => i.href === router.pathname),
		[items, router.pathname]
	);

	return (
		<nav className="bg-white dark:bg-gray-800 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5">
			<div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="w-full justify-start flex items-center">
						<Logo />
						<div className="flex-1 ml-4 text-gray-800 dark:text-white font-semibold">
							Dima Danyliuk
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								{items.map((item) => (
									<LinkTo
										key={item.href}
										href={item.href}
										className={clsx(
											'hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium',
											item.href === selectedItem?.href
												? 'text-gray-800 dark:text-white'
												: 'text-gray-300'
										)}
									>
										{item.label}
									</LinkTo>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
