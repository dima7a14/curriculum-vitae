import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

import technologies from '../consts/technologies';
import getRandomNumber from '../utils/get-random-number';

import Technology from './Technology';

function ExperienceItem({
	color,
	company,
	companyLink,
	duration,
	role,
	projects,
}) {
	const containerAnimation = useMemo(
		() => ({
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					staggerChildren: getRandomNumber(0.1, 0.2),
				},
			},
		}),
		[]
	);
	const techAnimation = useMemo(
		() => ({
			hidden: { opacity: 1, scale: 0 },
			visible: {
				opacity: 1,
				scale: 1,
				transition: {
					delayChildren: getRandomNumber(0.1, 0.3),
					staggerChildren: getRandomNumber(0.05, 0.1),
				},
			},
		}),
		[]
	);
	const contentAnimation = useMemo(
		() => ({
			hidden: {
				opacity: 0,
				y: 60,
			},
			visible: {
				opacity: 1,
				y: 0,
			},
		}),
		[]
	);

	return (
		<motion.li
			variants={containerAnimation}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className={clsx('border-l-2 pl-0.5 py-3', color.border)}
		>
			<motion.div
				variants={contentAnimation}
				className="flex flex-start items-center"
			>
				<div
					className={clsx(
						'w-5 h-5 rounded-full -ml-3 mr-2.5',
						color.bg
					)}
				/>
				<p className="pl-0.5 text-gray-500 dark:text-gray-300 text-sm md:text-lg">
					{duration}
				</p>
			</motion.div>
			<div className="mt-0.5 ml-5">
				<motion.h2
					variants={contentAnimation}
					className="text-gray-800 dark:text-white font-semibold text-xl md:text-3xl mb-1"
				>
					{company}
					{companyLink && (
						<a
							href={companyLink}
							target="_blank"
							rel="noreferrer"
							className={clsx(
								'italic hover:text-sky-600 text-sm md:text-lg ml-2',
								color.text
							)}
						>
							<FaExternalLinkAlt className="inline-block" />
						</a>
					)}
				</motion.h2>
				<motion.h3
					variants={contentAnimation}
					className="text-gray-800 dark:text-white font-light text-md md:text-lg mb-1 md:mb-3"
				>
					Role: <span className="italic">{role}</span>
				</motion.h3>
			</div>
			{projects.map((pr) => (
				<div
					key={pr.name ?? pr.link ?? company}
					className="mt-0.5 ml-5"
				>
					<motion.h3
						variants={contentAnimation}
						className="text-gray-800 dark:text-white font-semibold text-lg md:text-2xl my-2 md:my-4"
					>
						{pr.name}
						{pr.link && (
							<a
								href={pr.link}
								target="_blank"
								rel="noreferrer"
								className={clsx(
									'italic hover:text-sky-600 text-sm md:text-lg ml-2',
									color.text
								)}
							>
								<FaExternalLinkAlt className="inline-block" />
							</a>
						)}
					</motion.h3>
					{pr.description && (
						<motion.p
							variants={contentAnimation}
							className="text-gray-500 dark:text-gray-300 text-sm md:text-lg mb-2 md:mb-4"
						>
							{pr.description}
						</motion.p>
					)}
					<motion.div
						variants={techAnimation}
						className="flex flex-wrap justify-start items-center"
					>
						{pr.technologies.map((tech) => (
							<motion.div key={tech} variants={contentAnimation}>
								<Technology
									className="mr-2 mb-2"
									name={technologies[tech].name}
									Icon={technologies[tech].Icon}
									level={technologies[tech].level}
								/>
							</motion.div>
						))}
					</motion.div>
					<motion.h3
						variants={contentAnimation}
						className="font-normal text-gray-800 dark:text-white text-lg md:text-xl mb-2"
					>
						Responsibilities:
					</motion.h3>
					<ul className="text-gray-500 dark:text-gray-300 text-sm md:text-lg list-disc list-inside">
						{pr.responsibilities.map((rb) => (
							<motion.li
								variants={contentAnimation}
								key={rb}
								className="my-1"
							>
								{rb}
							</motion.li>
						))}
					</ul>
				</div>
			))}
		</motion.li>
	);
}

ExperienceItem.propTypes = {
	color: PropTypes.shape({
		text: PropTypes.string,
		bg: PropTypes.string,
		border: PropTypes.string,
	}).isRequired,
	company: PropTypes.string,
	companyLink: PropTypes.string,
	duration: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	projects: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			link: PropTypes.string,
			description: PropTypes.string,
			technologies: PropTypes.arrayOf(PropTypes.string),
			responsibilities: PropTypes.arrayOf(PropTypes.string),
		})
	),
};

export default ExperienceItem;
