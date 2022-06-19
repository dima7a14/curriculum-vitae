import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import links from '../consts/links';

import Head from '../components/head';

import profilePic from '../public/profile.jpg';
import styles from '../styles/about.module.css';

function About() {
	return (
		<>
			<Head title="About me">
				<title>About me</title>
			</Head>
			<div className="text-center">
				<div className="bg-black dark:bg-white bg-opacity-90 border-2 border-gray-200 dark:border-black rounded-lg px-4 py-2 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 font-semibold italic text-green-500 mx-auto text-sm sm:text-lg md:text-xl lg:text-2xl mb-2 md:mb-6 inline-block">
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
			</div>
			<article className="prose dark:prose-invert prose-2xl w-full prose-p:my-4 md:prose-p:my-8 prose-p:text-lg sm:prose-p:text-2xl">
				<div className="w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 mx-auto md:ml-4 md:float-right rounded-full border-4 md:border-8 border-sky-200 dark:border-purple-300 shadow-lg overflow-hidden">
					<Image src={profilePic} width={256} height={256} />
				</div>
				<h1 className="font-light text-3xl md:text-6xl text-center md:text-left">
					Dima Danyliuk
				</h1>
				<p>
					I am a developer based in Ukraine 🇺🇦 with a passion for
					learning new things, reading different books, and playing
					unique indie games.
				</p>
				<p>
					Also, I have a dream to create some meaningful projects and
					build my custom robot)
				</p>
				<p>Feel free to contact me if you have any questions.</p>
				<div className="flex flex-row flex-wrap justify-between items-center px-4 lg:px-16">
					{links.map(({ Icon, link, label }) => (
						<a
							key={link}
							href={link}
							target="_blank"
							rel="noreferrer"
							title={label}
						>
							<Icon className="text-black dark:text-white hover:text-sky-600 dark:hover:text-purple-500 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16" />
						</a>
					))}
				</div>
			</article>
		</>
	);
}

export default About;
