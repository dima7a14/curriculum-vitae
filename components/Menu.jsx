'use client';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { FaTimes } from 'react-icons/fa';

import Button from './Button';

function Menu() {
	return (
		<Popover>
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
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}

export default Menu;
