import React, { Fragment, useState, useEffect, useLayoutEffect } from 'react';
import { FaSun, FaRegMoon, FaTimes, FaCog } from 'react-icons/fa';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';

import Button from './button';

function getSystemScheme() {
	if (typeof window === 'undefined') {
		return 'light';
	}

	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}

	return 'light';
}

function applyScheme(scheme) {
	if (typeof window !== 'undefined') {
		if (scheme === 'dark') {
			window.document.documentElement.classList.add('dark');
		} else {
			window.document.documentElement.classList.remove('dark');
		}
	}
}

const SCHEME_KEY = 'color-scheme';

function readThemeScheme() {
	if (typeof window === 'undefined') {
		return 'system';
	}

	const storedScheme = window.localStorage.getItem(SCHEME_KEY);

	return storedScheme;
}

function saveThemeScheme(scheme) {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem(SCHEME_KEY, scheme);
		applyScheme(scheme);
	}
}

function removeThemeScheme() {
	if (typeof window !== 'undefined') {
		window.localStorage.removeItem(SCHEME_KEY);
		applyScheme(getSystemScheme());
	}
}

function ThemeSwitcher() {
	const [colorScheme, setColorScheme] = useState();
	const [manuallySelected, setManuallySelected] = useState(false);

	useEffect(() => {
		const storedScheme = readThemeScheme();

		if (storedScheme !== null) {
			setManuallySelected(true);
			setColorScheme(storedScheme);
			applyScheme(storedScheme);
		} else {
			const systemScheme = getSystemScheme();

			setColorScheme(systemScheme);
			applyScheme(systemScheme);
		}
	}, []);

	useLayoutEffect(() => {
		const checkScheme = () => {
			if (!manuallySelected) {
				const systemScheme = getSystemScheme();

				setColorScheme(systemScheme);
				applyScheme(systemScheme);
			}
		};
		const mq = window.matchMedia('(prefers-color-scheme: dark)');

		mq.addEventListener('change', checkScheme);

		return () => {
			mq.removeEventListener('change', checkScheme);
		};
	}, [manuallySelected, setColorScheme]);

	const changeScheme = (scheme) => {
		switch (scheme) {
			case 'light':
			case 'dark': {
				setColorScheme(scheme);
				saveThemeScheme(scheme);
				setManuallySelected(true);
				break;
			}

			case 'system':
			default: {
				setColorScheme(getSystemScheme());
				setManuallySelected(false);
				removeThemeScheme();
			}
		}
	};
	const getActiveScheme = () => {
		if (manuallySelected) {
			return colorScheme;
		}

		return 'system';
	};

	return (
		<Popover className="relative">
			<Popover.Button
				as={Button}
				className={clsx(
					'mr-4 px-2',
					manuallySelected && 'text-sky-600 dark:text-purple-500'
				)}
			>
				{colorScheme === 'light' && <FaSun className="w-6 h-6" />}
				{colorScheme === 'dark' && <FaRegMoon className="w-6 h-6" />}
			</Popover.Button>
			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
				className="absolute top-16 -mt-3 z-10 right-0"
			>
				<Popover.Panel
					focus
					className="inset-x-0 transition transform origin-top-right min-w-max md:max-w-xs"
				>
					<div className="rounded-b-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 p-2">
						<div className="flex items-center justify-end">
							<Popover.Button as={Button} className="px-2">
								<FaTimes
									className="w-6 h-6"
									aria-hidden="true"
								/>
							</Popover.Button>
						</div>
						<div className="mt-2 flex flex-col space-y-2">
							<Popover.Button
								as={Button}
								className="flex flex-row space-x-2 items-center justify-center"
								variant={
									getActiveScheme() === 'light'
										? 'primary'
										: 'default'
								}
								onClick={() => changeScheme('light')}
							>
								<FaSun />
								<span>Light</span>
							</Popover.Button>
							<Popover.Button
								as={Button}
								className="flex flex-row space-x-2 items-center justify-center"
								variant={
									getActiveScheme() === 'dark'
										? 'primary'
										: 'default'
								}
								onClick={() => changeScheme('dark')}
							>
								<FaRegMoon />
								<span>Dark</span>
							</Popover.Button>
							<Popover.Button
								as={Button}
								className="flex flex-row space-x-2 items-center justify-center"
								variant={
									getActiveScheme() === 'system'
										? 'primary'
										: 'default'
								}
								onClick={() => changeScheme('system')}
							>
								<FaCog />
								<span>System</span>
							</Popover.Button>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}

export default ThemeSwitcher;
