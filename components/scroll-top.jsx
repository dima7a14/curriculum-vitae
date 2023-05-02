'use client';

import React, { useCallback, useEffect } from 'react';
import { useMotionValue, useScroll, motion, animate } from 'framer-motion';
import { AiOutlineArrowUp } from 'react-icons/ai';

import Button from './button';

const MotionButton = motion(Button);

function ScrollTop() {
	const { scrollYProgress } = useScroll();
	const opacity = useMotionValue(0);
	const bottom = useMotionValue(0);
	const scrollTop = useCallback(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	useEffect(() => {
		scrollYProgress.onChange((value) => {
			opacity.stop();

			if (value > 0.1) {
				animate(opacity, 1, {
					duration: 0.25,
					ease: 'easeInOut',
				});
				animate(bottom, 16, {
					duration: 0.5,
					ease: 'easeInOut',
				});
			} else {
				animate(opacity, 0, {
					duration: 0.25,
					ease: 'easeInOut',
				});
				animate(bottom, 0, {
					duration: 0.5,
					ease: 'easeInOut',
				});
			}
		});
	}, []);

	return (
		<MotionButton
			className="px-2 fixed right-4"
			style={{ opacity, bottom }}
			onClick={scrollTop}
		>
			<AiOutlineArrowUp />
		</MotionButton>
	);
}

export default ScrollTop;
