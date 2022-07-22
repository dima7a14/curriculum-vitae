import React, { useState, useEffect, useRef } from 'react';
import { FiCoffee } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

import links from '../consts/links';

import LinkTo from './linkTo';

const logos = [
	{
		Icon: FiCoffee,
		href: '/',
		local: true,
	},
	...links.map(({ link, Icon }) => ({
		href: link,
		Icon,
		local: false,
	})),
];

const LOGO_TIMEOUT = 4000;

function Logo() {
	const [logoIndex, setLogoIndex] = useState(0);
	const currentLogo = logos[logoIndex];
	const getNextLogoIndex = (index) => {
		if (index + 1 === logos.length) {
			return 0;
		}

		return index + 1;
	};
	const logoInterval = useRef(null);
	const startAnimation = () => {
		logoInterval.current = setInterval(() => {
			setLogoIndex(getNextLogoIndex);
		}, LOGO_TIMEOUT);
	};
	const pauseAnimation = () => {
		clearTimeout(logoInterval.current);
	};

	useEffect(() => {
		startAnimation();

		return () => {
			pauseAnimation();
		};
	}, []);

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.div
				key={currentLogo.href}
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.1 }}
				onHoverStart={pauseAnimation}
				onHoverEnd={startAnimation}
				onPanStart={pauseAnimation}
				onPanEnd={startAnimation}
				onTapStart={pauseAnimation}
				onTapCancel={startAnimation}
			>
				<LinkTo
					href={currentLogo.href}
					target={currentLogo.local ? '_self' : '_blank'}
					rel="noreferrer"
					className="drop-shadow-2xl px-2 py-2 text-4xl md:text-5xl text-gray-800 dark:text-white hover:text-sky-600 dark:hover:text-purple-500 transition-colors duration-200 ease-in-out"
				>
					<currentLogo.Icon />
				</LinkTo>
			</motion.div>
		</AnimatePresence>
	);
}

export default Logo;
