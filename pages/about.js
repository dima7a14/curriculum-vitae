import React, { useMemo } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import links from '../consts/links';
import technologiesMap from '../consts/technologies';

import Head from '../components/head';
import SkillSet from '../components/skill-set';
import { getLevelColors } from '../components/technology';

import profilePic from '../public/profile.jpg';
import styles from '../styles/about.module.css';

const sectionAnimation = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.1,
		},
	},
};

const greetingsAnimation = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const contentAnimation = {
	hidden: { opacity: 0, scale: 0.5, y: 60 },
	visible: { opacity: 1, scale: 1, y: 0 },
};

function About() {
	const languages = useMemo(
		() => [
			technologiesMap.js,
			technologiesMap.ts,
			technologiesMap.python,
			technologiesMap.dart,
		],
		[]
	);
	const technologies = useMemo(
		() => Object.values(technologiesMap).filter((t) => !t.language),
		[]
	);

	return (
		<motion.section
			variants={sectionAnimation}
			initial="hidden"
			animate="visible"
			className="relative w-full px-6 py-12 bg-white dark:bg-gray-800 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl pt-4 sm:pt-6 lg:pt-8 lg:pb-12 rounded-lg"
		>
			<Head title="About me">
				<title>About me</title>
			</Head>
			<motion.div
				variants={greetingsAnimation}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="text-center"
			>
				<div className="bg-black bg-opacity-90 border-2 border-gray-200 rounded-lg px-4 py-2 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 font-semibold italic text-green-500 mx-auto text-sm sm:text-lg md:text-xl lg:text-2xl mb-2 md:mb-6 inline-block">
					Hello! I am a front-end developer and this is my Curriculum
					Vitae
					<span
						className={clsx(
							'border-b-2 border-b-green-500 not-italic ml-2 animate-blink',
							styles.underscore
						)}
					>
						&nbsp;
					</span>
				</div>
			</motion.div>
			<article className="prose dark:prose-invert prose-2xl w-full prose-p:my-4 md:prose-p:my-8 prose-p:text-lg sm:prose-p:text-2xl">
				<motion.div
					variants={contentAnimation}
					className="w-48 h-48 mx-auto md:ml-4 sm:float-right rounded-full border-4 md:border-4 border-sky-200 dark:border-purple-300 shadow-lg overflow-hidden"
				>
					<Image src={profilePic} width={192} height={192} />
				</motion.div>
				<motion.h1
					variants={contentAnimation}
					className="font-light text-3xl sm:text-5xl md:text-6xl text-center sm:text-left mb-8"
				>
					Dima Danyliuk
				</motion.h1>
				<motion.h4
					variants={contentAnimation}
					className="font-semibold text-xl md:text-2xl border-b border-b-gray-800 inline-block my-0"
				>
					Bio
				</motion.h4>
				<motion.p variants={contentAnimation}>
					I am a developer based in Ukraine 🇺🇦 with a passion for
					learning new things, reading different books, and playing
					unique indie games.
				</motion.p>
				<motion.p variants={contentAnimation}>
					Also, I have a dream to create some meaningful projects and
					build my custom robot)
				</motion.p>
				<motion.p variants={contentAnimation}>
					Feel free to contact me if you have any questions.
				</motion.p>
				<motion.h4
					variants={contentAnimation}
					className="font-semibold text-xl md:text-2xl border-b border-b-gray-800 inline-block mt-0 mb-8"
				>
					Programming languages
				</motion.h4>
				<ul className="text-xl md:text-2xl list-none pl-0">
					{languages.map(({ name, experience, level, Icon }) => (
						<motion.li
							key={name}
							variants={contentAnimation}
							className={clsx(
								'flex flex-row space-x-2 md:space-x-4 items-center mt-0',
								getLevelColors(level).text
							)}
						>
							<Icon className="rounded" />
							<span>
								{name} ({experience})
							</span>
						</motion.li>
					))}
				</ul>
				<motion.h4
					variants={contentAnimation}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="font-semibold text-xl md:text-2xl border-b border-b-gray-800 inline-block my-8"
				>
					Technologies &amp; Tools
				</motion.h4>
				<SkillSet skills={technologies} />
				<motion.h4
					variants={contentAnimation}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="font-semibold text-xl md:text-2xl border-b border-b-gray-800 inline-block my-8"
				>
					Links
				</motion.h4>
				<div className="flex flex-col flex-wrap justify-between items-start space-y-2 md:space-y-4">
					{links.map(({ Icon, link, label }) => (
						<motion.a
							key={link}
							variants={contentAnimation}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							href={link}
							target="_blank"
							rel="noreferrer"
							title={label}
							className="flex flex-row justify-start items-center space-x-2 no-underline hover:text-sky-600 dark:hover:text-purple-500 transition duration-200 ease font-light text-xl md:text-2xl"
						>
							<Icon className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10" />
							<span>{label}</span>
						</motion.a>
					))}
				</div>
			</article>
		</motion.section>
	);
}

export default About;
