'use client';

import { useState, useEffect, useRef } from 'react';
import { FiCoffee } from 'react-icons/fi';
import {
	motion,
	AnimatePresence,
	animate,
	useMotionValue,
} from 'framer-motion';

import { contacts } from '../consts/data';

import LinkTo from './LinkTo';

const logos = [
	{
		Icon: FiCoffee,
		href: '/',
		local: true,
	},
	...contacts.map(({ link, Icon }) => ({
		href: link,
		Icon,
		local: false,
	})),
];

function Logo() {
	const [logoIndex, setLogoIndex] = useState(0);
	const currentLogo = logos[logoIndex];
	const progress = useMotionValue(logoIndex);
	const animation = useRef(null);
	const startAnimation = () => {
		animation.current = animate(progress, logoIndex, {
			duration: 4,
			ease: 'easeInOut',
			onComplete: () => {
				if (logoIndex === logos.length - 1) {
					progress.set(0);
					setLogoIndex(1);
				} else {
					setLogoIndex(logoIndex + 1);
				}
			},
		});
	};
	const stopAnimation = () => {
		animation.current.stop();
	};

	useEffect(() => {
		startAnimation();

		return () => animation.current.stop();
	}, [logoIndex]);

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.div
				key={currentLogo.href}
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.1 }}
				onHoverStart={stopAnimation}
				onHoverEnd={startAnimation}
				onPanStart={stopAnimation}
				onPanEnd={startAnimation}
				onTapStart={stopAnimation}
				onTapCancel={startAnimation}
			>
				<LinkTo
					href={currentLogo.href}
					target={currentLogo.local ? '_self' : '_blank'}
					rel="noreferrer"
					className="drop-shadow-2xl px-2 py-2 text-4xl md:text-5xl text-gray-800 dark:text-white hover:text-sky-700 dark:hover:text-purple-300 transition-colors duration-200 ease-in-out"
				>
					<currentLogo.Icon />
				</LinkTo>
			</motion.div>
		</AnimatePresence>
	);
}

export default Logo;
