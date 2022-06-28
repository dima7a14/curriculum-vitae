import React from 'react';
import { FaDownload } from 'react-icons/fa';

import routes from '../consts/routes';
import LinkTo from '../components/linkTo';
import Head from '../components/head';
import Button from '../components/button';

function HomePage() {
	return (
		<section className="relative w-full px-6 py-4 lg:py-12 mt-32 bg-white dark:bg-gray-800 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl rounded-lg">
			<Head />
			<div className="prose dark:prose-invert prose-2xl w-full prose-p:my-4 md:prose-p:my-8 prose-p:text-lg sm:prose-p:text-2xl text-center">
				<h1 className="font-light text-3xl md:text-4xl">
					Dima Danyliuk
				</h1>
				<h2 className="font-normal text-3xl md:text-5xl md:mt-0 md:mb-8">
					Curriculum Vitae
				</h2>
				<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 justify-center">
					<LinkTo
						href={routes.about.href}
						component={(btnProps) => (
							<Button
								variant="primary"
								type="link"
								{...btnProps}
							/>
						)}
					>
						About me
					</LinkTo>
					<LinkTo
						href="/cv.pdf"
						target="_blank"
						component={(btnProps) => (
							<Button
								variant="secondary"
								type="link"
								className="flex flex-row space-x-2 justify-center items-center"
								{...btnProps}
							/>
						)}
					>
						<FaDownload />
						<span>Download</span>
					</LinkTo>
				</div>
			</div>
		</section>
	);
}

export default HomePage;
