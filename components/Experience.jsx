'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { experience } from '../consts/data';
import technologies from '../consts/technologies';
import Heading from './Heading';
import Button from './Button';
import Technology from './Technology';

function ProjectLine({ title, children, className = '' }) {
	return (
		<div className="">
			<div className="text-sky-700 dark:text-purple-300 font-cursive-2 text-lg mb-2">
				{title}
			</div>
			<div className={clsx('text-center', className)}>{children}</div>
		</div>
	);
}

ProjectLine.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default function Experience() {
	const [companyIndex, setCompanyIndex] = useState(0);
	const currentCompany = experience[companyIndex];

	return (
		<section className="mt-2 md:mt-4 px-2 md:px-4">
			<Heading text="Experience" />
			<div className="flex flex-row flex-nowrap justify-between items-stretch p-1 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white space-x-1 relative">
				<Button
					variant="outline"
					className="px-2 text-xl border-r-2 border-gray-300 dark:border-gray-500 text-gray-600 dark:text-gray-500"
					disabled={companyIndex === 0}
					onClick={() => setCompanyIndex(companyIndex - 1)}
				>
					<HiArrowNarrowLeft />
				</Button>
				<div className="flex-auto text-center">
					<h2 className="text-2xl font-cursive-2 -mt-2">
						{currentCompany.company}
					</h2>
					<h6 className="text-xs font-semibold text-gray-600 dark:text-gray-300">
						{currentCompany.duration}
					</h6>
				</div>
				<Button
					variant="outline"
					className="px-2 text-xl border-l-2 border-gray-300 dark:border-gray-500 text-gray-600 dark:text-gray-500"
					disabled={companyIndex === experience.length - 1}
					onClick={() => setCompanyIndex(companyIndex + 1)}
				>
					<HiArrowNarrowRight />
				</Button>
			</div>
			<div>
				{currentCompany.projects.map((project) => (
					<div
						key={project.name}
						className="pb-2 mb-2 last:mb-0 border-b-gray-600 dark:border-b-gray-500 border-b-2 last:border-b-0"
					>
						<ProjectLine
							title="Name"
							className="text-2xl font-light"
						>
							{project.link ? (
								<a
									href={project.link}
									target="_blank"
									rel="noreferrer"
									className="inline-block align-middle text-sky-600 hover:text-sky-700 dark:text-purple-300 dark:hover:text-purple-400"
								>
									<span className="mr-2">{project.name}</span>
									<FaExternalLinkAlt className="inline-block text-sm md:text-lg" />
								</a>
							) : (
								project.name
							)}
						</ProjectLine>
						<ProjectLine title="Role" className="italic">
							{project.role}
						</ProjectLine>
						{project.description && (
							<ProjectLine
								title="About"
								className="text-sm text-justify leading-5 px-4"
							>
								{project.description}
							</ProjectLine>
						)}
						<ProjectLine
							title="Technologies"
							className="flex flex-row flex-wrap justify-center items-center"
						>
							{project.technologies.map((tech) => (
								<div key={tech} className="m-1">
									<Technology
										name={technologies[tech].name}
										Icon={technologies[tech].Icon}
										level={technologies[tech].level}
									/>
								</div>
							))}
						</ProjectLine>
						<ProjectLine title="Responsibilities">
							<ul className="text-left list-disc list-inside text-sm leading-5 px-4">
								{project.responsibilities.map((resp) => (
									<li key={resp} className="my-2">
										{resp}
									</li>
								))}
							</ul>
						</ProjectLine>
					</div>
				))}
			</div>
		</section>
	);
}
