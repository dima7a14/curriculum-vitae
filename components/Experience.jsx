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
			<div className="text-sky-700 dark:text-purple-400 font-cursive text-lg">
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
			<div className="flex flex-row flex-nowrap justify-between items-stretch p-1 rounded-lg bg-gray-200 space-x-1 relative">
				<Button
					variant="outline"
					className="px-2 text-xl border-r-2 border-gray-300 text-gray-600"
					disabled={companyIndex === 0}
					onClick={() => setCompanyIndex(companyIndex - 1)}
				>
					<HiArrowNarrowLeft />
				</Button>
				<div className="flex-auto text-center">
					<h2 className="text-2xl font-light">
						{currentCompany.company}
					</h2>
					<h6 className="text-xs font-semibold text-gray-600">
						{currentCompany.duration}
					</h6>
				</div>
				<Button
					variant="outline"
					className="px-2 text-xl border-l-2 border-gray-300 text-gray-600"
					disabled={companyIndex === experience.length - 1}
					onClick={() => setCompanyIndex(companyIndex + 1)}
				>
					<HiArrowNarrowRight />
				</Button>
			</div>
			<div>
				<h5 className="text-lg font-semibold text-center">Projects</h5>
				{currentCompany.projects.map((project) => (
					<div key={project.name}>
						<ProjectLine
							title="Name"
							className="text-2xl font-light"
						>
							{project.link ? (
								<a
									href={project.link}
									target="_blank"
									rel="noreferrer"
									className="inline-block align-middle text-sky-600 hover:text-sky-700"
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
						<ProjectLine
							title="About"
							className="text-sm text-justify leading-5"
						>
							{project.description}
						</ProjectLine>
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
							<ul>
								{project.responsibilities.map((resp) => (
									<li key={resp}>{resp}</li>
								))}
							</ul>
						</ProjectLine>
					</div>
				))}
			</div>
		</section>
	);
}
