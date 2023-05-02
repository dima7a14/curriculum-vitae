import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { motion, useScroll, useSpring } from 'framer-motion';

import experience from '../../consts/experience';

import Head from '../../components/head';
import ExperienceItem from '../../components/experience-item';

const availableColors = [
	{
		border: 'border-red-500',
		bg: 'bg-red-500',
		text: 'text-red-500',
	},
	{
		border: 'border-purple-500',
		bg: 'bg-purple-500',
		text: 'text-purple-500',
	},
	{
		border: 'border-blue-500',
		bg: 'bg-blue-500',
		text: 'text-blue-500',
	},
	{
		border: 'border-green-500',
		bg: 'bg-green-500',
		text: 'text-green-500',
	},
	{
		border: 'border-amber-500',
		bg: 'bg-amber-500',
		text: 'text-amber-500',
	},
	{
		border: 'border-rose-300',
		bg: 'bg-rose-300',
		text: 'text-rose-300',
	},
	{
		border: 'border-lime-400',
		bg: 'bg-lime-400',
		text: 'text-lime-400',
	},
];

function getRandomColor(originColors) {
	const colors = [...originColors];

	colors.sort(() => 0.5 - Math.random());

	return colors;
}

function Experience() {
	const colors = useMemo(() => getRandomColor(availableColors), []);
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
	return (
		<section className="relative w-full px-6 py-12 bg-white dark:bg-gray-800 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl pt-4 sm:pt-6 lg:pt-8 lg:pb-12 rounded-lg">
			<motion.div
				style={{ scaleX }}
				className="fixed top-0 left-0 right-0 h-2 origin-top-left z-10 bg-sky-200 dark:bg-violet-400 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
			/>
			<Head title="My experience" />
			<h1 className="text-center text-gray-800 dark:text-white text-2xl md:text-4xl font-light mb-4">
				Experience
			</h1>
			<ol>
				{experience.map((exp, expIndex) => {
					const colorIndex =
						expIndex >= colors.length
							? expIndex % colors.length
							: expIndex;

					return (
						<ExperienceItem
							key={exp.company ?? exp.companyLink}
							color={colors[colorIndex]}
							company={exp.company}
							companyLink={exp.companyLink}
							role={exp.role}
							duration={exp.duration}
							projects={exp.projects}
						/>
					);
				})}
			</ol>
		</section>
	);
}

export default Experience;
