import Image from 'next/image';

import { about } from '../consts/data';
import profilePic from '../public/profile.jpg';
import Heading from './Heading';

export default function About() {
	return (
		<section>
			<div className="pt-2 md:pt-4">
				<Heading text="About" />
			</div>
			<div className="flex flex-col-reverse md:flex-row justify-between align-top p-2">
				<div className="flex-initial">
					{about.bio.map((paragraph, index) => (
						<p
							key={index}
							className="mb-2 md:mb-4 last:mb-0 text-lg md:text-3xl font-light"
						>
							{paragraph}
						</p>
					))}
				</div>
				<div className="flex-auto flex-shrink-0 ml-0 md:ml-8 flex flex-col items-center md:items-end md:p-4 mb-4 md:mb-0">
					<div className="w-48 h-48 mb-2 md:mb-4 border-4 border-white dark:border-purple-400 shadow-lg shadow-slate-700/10 ring-1 ring-gray-900/5 rounded-full overflow-hidden">
						<Image
							src={profilePic}
							alt={about.title}
							width={192}
							height={192}
						/>
					</div>
					<div className="text-center md:text-right">
						<h3 className="text-2xl md:text-4xl font-light">
							{about.title}
						</h3>
						<h4 className="text-lg md:text-xl font-medium mt-0 md:mt-2">
							{about.subTitle}
						</h4>
					</div>
				</div>
			</div>
			<div className="mt-y">
				<div className="px-2 md:px-4">
					<Heading text="Links" />
				</div>
				<ul className="p-2 md:p-4 flex flex-row flex-nowrap justify-center bg-sky-700 dark:bg-purple-400 text-white drop-shadow-md">
					{about.contacts.map(({ Icon, link, label }) => (
						<li key={link} className="group mx-3 md:mx-6 lg:mx-12">
							<a
								href={link}
								target="_blank"
								rel="noreferrer"
								label={label}
								className="text-center inline-block"
							>
								<Icon className="w-10 md:w-16 lg:w-20 h-10 md:h-16 lg:h-20 group-hover:animate-shake mx-auto" />
								<span className="inline-block font-semibold text-base md:text-lg group-hover:animate-pulse">
									{label}
								</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
