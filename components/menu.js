import React, { useMemo, Fragment } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { Popover, Transition } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

import routes from '../consts/routes';
import LinkTo from './linkTo';

function Menu() {
	const items = useMemo(() => Object.values(routes), [routes]);
	const router = useRouter();
	const selectedItem = useMemo(
		() => items.find((i) => i.href === router.pathname),
		[routes, router.pathname]
	);

	return (
		<Popover>
			<div className="md:hidden">
				<Popover.Button className="bg-white dark:bg-gray-800 dark:border-2 dark:border-white rounded text-gray-800 dark:text-white p-2">
					<FaBars className="w-6 h-6" aria-hidden="true" />
				</Popover.Button>
			</div>
			<nav className="hidden md:flex ml-10 items-baseline space-x-4 relative">
				{items.map((item) => (
					<LinkTo
						key={item.href}
						href={item.href}
						className={clsx(
							'hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium',
							item.href === selectedItem?.href
								? 'text-gray-800 dark:text-white'
								: 'text-gray-500'
						)}
					>
						{item.label}
					</LinkTo>
				))}
			</nav>
			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute top-0 z-10 inset-x-0 p-2 transition transform origin-top-right md:hidden"
				>
					<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-y-2 divide-gray-50">
						<div className="p-4">
							<div className="flex items-center justify-end">
								<Popover.Button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-2">
									<FaTimes
										className="w-6 h-6"
										aria-hidden="true"
									/>
								</Popover.Button>
							</div>
							<div className="mt-2">
								{items.map((item) => (
									<div key={item.href} className="py-4 px-5">
										<LinkTo
											href={item.href}
											className={clsx(
												'text-base font-medium hover:text-gray-500 dark:text-white',
												item.href === selectedItem?.href
													? 'text-gray-800'
													: 'text-gray-500'
											)}
										>
											<Popover.Button>
												{item.label}
											</Popover.Button>
										</LinkTo>
									</div>
								))}
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}

export default Menu;
