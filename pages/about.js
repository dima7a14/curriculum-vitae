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
			<section className="relative w-full px-6 py-12 bg-white dark:bg-gray-800 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-8 lg:pb-12 rounded-lg">
				<div className="text-center">
					<div className="bg-black dark:bg-white bg-opacity-90 border-2 border-gray-200 dark:border-black rounded-lg px-4 py-2 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 font-semibold italic text-green-500 mx-auto text-2xl mb-6 inline-block">
						Hello! I am a front-end developer and this is my
						Curriculum Vitae
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
				<article className="prose dark:prose-invert prose-2xl w-full">
					<div className="w-64 h-64 ml-4 float-right rounded-full border-8 border-white shadow-lg overflow-hidden">
						<Image src={profilePic} width={256} height={256} />
					</div>
					<h1 className="font-light underline">Dima Danyliuk</h1>
					<p>
						I am a developer based in Ukraine 🇺🇦 with a passion for
						learning new things, reading different books, and
						playing unique indie games.
					</p>
					<p>
						Also, I have a dream to create some meaningful projects
						and build my custom robot)
					</p>
					<p>Feel free to contact me if you have any questions.</p>
					<div className="flex flex-row flex-wrap justify-between items-center px-16">
						{links.map(({ Icon, link, label }) => (
							<a
								key={link}
								href={link}
								target="_blank"
								rel="noreferrer"
								title={label}
							>
								<Icon
									className="text-black dark:text-white hover:text-sky-600"
									size={48}
								/>
							</a>
						))}
					</div>
				</article>
			</section>
		</>
	);
}

export default About;
