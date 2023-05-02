'use client';

import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

import routes from '../consts/routes';
import LinkTo from '../components/linkTo';
import Head from '../components/head';
import Button from '../components/button';

const sectionAnimation = {
	hidden: {
		opacity: 0,
		y: 60,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.3,
		},
	},
};

const contentAnimation = {
	hidden: {
		opacity: 0,
		y: 30,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

function HomePage() {
	return (
		<motion.section
			variants={sectionAnimation}
			initial="hidden"
			animate="visible"
			className="relative w-full px-6 py-4 lg:py-12 mt-32 bg-white dark:bg-gray-800 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl rounded-lg"
		>
			<Head />
			<div className="prose dark:prose-invert prose-2xl w-full prose-p:my-4 md:prose-p:my-8 prose-p:text-lg sm:prose-p:text-2xl text-center">
				<motion.h1
					variants={contentAnimation}
					className="font-light text-3xl md:text-5xl md:mb-24"
				>
					Curriculum Vitae
				</motion.h1>
				<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 justify-center">
					<LinkTo
						href={routes.about.href}
						component={(btnProps) => (
							<motion.div variants={contentAnimation}>
								<Button
									variant="primary"
									type="link"
									{...btnProps}
								/>
							</motion.div>
						)}
					>
						About me
					</LinkTo>
					<LinkTo
						href="/cv.pdf"
						target="_blank"
						component={(btnProps) => (
							<motion.div variants={contentAnimation}>
								<Button
									variant="secondary"
									type="link"
									className="inline-flex flex-row space-x-2 justify-center items-center"
									{...btnProps}
								/>
							</motion.div>
						)}
					>
						<FaDownload />
						<span>Download</span>
					</LinkTo>
				</div>
			</div>
		</motion.section>
	);
}

export default HomePage;
