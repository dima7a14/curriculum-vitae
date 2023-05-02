'use client';

import React, { useMemo, Fragment } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { Popover, Transition } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

import routes from '../consts/routes';
import Button from './button';
import LinkTo from './linkTo';

function Menu() {
	const items = useMemo(
		() => Object.values(routes).filter((route) => route.enabled),
		[routes]
	);
	const router = useRouter();
	const selectedItem = useMemo(
		() => items.find((i) => i.href === router.pathname),
		[routes, router.pathname]
	);

	return (
		<Popover>
			<div className="md:hidden">
				<Popover.Button as={Button} className="text-lg md:text-xl px-2">
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
					className="absolute top-16 z-10 inset-x-0 transition transform origin-top-right md:hidden"
				>
					<div className="rounded-b-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800">
						<div className="p-2">
							<div className="flex items-center justify-end">
								<Popover.Button as={Button} className="px-2">
									<FaTimes
										className="w-6 h-6"
										aria-hidden="true"
									/>
								</Popover.Button>
							</div>
							<div className="mt-2 flex flex-col">
								{items.map((item) => (
									<LinkTo
										key={item.href}
										href={item.href}
										className={clsx(
											'hover:text-gray-500 dark:text-white mt-2',
											item.href === selectedItem?.href
												? 'text-gray-800 '
												: 'text-gray-500 '
										)}
										component={(cmpProps) => (
											<Popover.Button
												as={Button}
												type="link"
												{...cmpProps}
											/>
										)}
									>
										{item.label}
									</LinkTo>
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
