import React from 'react';
import PropTypes from 'prop-types';
import { FaExternalLinkAlt } from 'react-icons/fa';
import clsx from 'clsx';

import experience from '../consts/experience';

import Head from '../components/head';
import Chip from '../components/chip';

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

function Experience({ items, colors }) {
	return (
		<>
			<Head title="My experience" />
			<h1 className="text-center text-gray-800 dark:text-white text-2xl md:text-4xl font-light mb-4">
				Experience
			</h1>
			<ol>
				{items.map((exp, expIndex) => {
					const colorIndex =
						expIndex >= colors.length
							? expIndex % colors.length
							: expIndex;

					return (
						<li
							key={exp.company}
							className={clsx(
								'border-l-2 pl-0.5 py-3',
								colors[colorIndex].border
							)}
						>
							<div className="flex flex-start items-center">
								<div
									className={clsx(
										'w-5 h-5 rounded-full -ml-3 mr-2.5',
										colors[colorIndex].bg
									)}
								/>
								<p className="pl-0.5 text-gray-500 dark:text-gray-300 text-sm md:text-lg">
									{exp.duration}
								</p>
							</div>
							<div className="mt-0.5 ml-5">
								<h2 className="text-gray-800 dark:text-white font-semibold text-xl md:text-3xl mb-1">
									{exp.company}
									{exp.companyLink && (
										<a
											href={exp.companyLink}
											target="_blank"
											rel="noreferrer"
											className={clsx(
												'italic hover:text-sky-600 text-sm md:text-lg ml-2',
												colors[colorIndex].text
											)}
										>
											<FaExternalLinkAlt className="inline-block" />
										</a>
									)}
								</h2>
								<h3 className="text-gray-800 dark:text-white font-light text-md md:text-lg mb-1 md:mb-3">
									Role:{' '}
									<span className="italic">{exp.role}</span>
								</h3>
							</div>
							{exp.projects.map((pr) => (
								<div key={pr.name} className="mt-0.5 ml-5">
									<h3 className="text-gray-800 dark:text-white font-semibold text-lg md:text-2xl my-2 md:my-4">
										{pr.name}
										{pr.link && (
											<a
												href={pr.link}
												target="_blank"
												rel="noreferrer"
												className={clsx(
													'italic hover:text-sky-600 text-sm md:text-lg ml-2',
													colors[colorIndex].text
												)}
											>
												<FaExternalLinkAlt className="inline-block" />
											</a>
										)}
									</h3>
									{pr.description && (
										<p className="text-gray-500 dark:text-gray-300 text-sm md:text-lg mb-2 md:mb-4">
											{pr.description}
										</p>
									)}
									<div className="flex flex-wrap justify-start items-center">
										{pr.technologies.map((tech) => (
											<Chip
												key={tech}
												className="mr-2 mb-2"
											>
												{tech}
											</Chip>
										))}
									</div>
									<h3 className="font-normal text-gray-800 dark:text-white text-lg md:text-xl mb-2">
										Responsibilities:
									</h3>
									<ul className="text-gray-500 dark:text-gray-300 text-sm md:text-lg list-disc list-inside">
										{pr.responsibilities.map((rb) => (
											<li key={rb} className="my-1">
												{rb}
											</li>
										))}
									</ul>
								</div>
							))}
						</li>
					);
				})}
			</ol>
		</>
	);
}

Experience.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	colors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
	return {
		props: {
			items: experience,
			colors: getRandomColor(availableColors),
		},
	};
}

export default Experience;
