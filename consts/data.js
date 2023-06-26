import { FaLinkedin, FaGithub, FaSkype, FaEnvelope } from 'react-icons/fa';

export const experience = [
	{
		company: 'Xenoss',
		companyLink: 'https://xenoss.io/',
		duration: 'October 2021 - current',
		projects: [
			{
				name: 'Venatus',
				link: 'https:/venatus.com/',
				role: 'Senior Front-End Engineer',
				description:
					'Venatus is a global ad-tech platform in gaming and entertainment helping brands reach the most engaged audiences across all devices.',
				responsibilities: [
					'implementing a new dynamic UI for publishers;',
					'improving workflow in main components;',
					'adding new blocks to existing business flows;',
					'integrating Venatus components with third-party adapters.',
				],
				technologies: [
					'html',
					'css',
					'js',
					'ts',
					'react',
					'redux',
					'reduxToolkit',
					'reduxSaga',
					'materialUI',
					'bootstrap',
					'webpack',
					'prebid',
					'jquery',
					'formik',
				],
			},
		],
	},
	{
		company: 'SDH',
		companyLink: 'https://sdh.com.ua/',
		duration: 'November 2020 - October 2021',
		projects: [
			{
				name: 'FieldHub',
				link: 'https://www.fieldhub.com/',
				role: 'Front-End Engineer',
				description:
					'FieldHub is a modern and feature-rich platform for businesses with field services, recurring revenue, and inventory management.',
				responsibilities: [
					'creating a multi-stage page to handle imported data from bank accounts;',
					'creating interfaces for fetching, filtering and managing hundreds of thousands of items from bank accounts;',
					'refactoring forms to unify them to one pattern; ',
					'refactoring codebase;',
					'writing new forms;',
					'covering new and old components with unit tests.',
				],
				technologies: [
					'html',
					'css',
					'sass',
					'js',
					'ts',
					'react',
					'redux',
					'mobx',
					'reactFinalForm',
					'antd',
					'python',
					'django',
					'drf',
					'webpack',
				],
			},
		],
	},
	{
		company: 'Devlion',
		companyLink: 'https://devlion.co/',
		duration: 'February 2015 - November 2020',
		projects: [
			{
				name: 'Chat plugin (MVP)',
				role: 'Full-Stack Engineer',
				description:
					'An audio chat for CMD Moodle. The main idea is to give the ability to communicate teacher with students on the same page via WebRTC technology.',
				responsibilities: [
					'creating a chat-plugin in React with different roles for users;',
					'creating a simple back-end in Node.js to handle and store all communication between users via Socket.io.',
				],
				technologies: [
					'html',
					'css',
					'js',
					'react',
					'redux',
					'jss',
					'materialUI',
					'socketIO',
					'node',
					'express',
					'sequelize',
					'postgresql',
				],
			},
			{
				name: 'H5P widgets for CMS Moodle',
				role: 'Front-End Developer',
				responsibilities: [
					'creating H5P content types for educational modules;',
					'fixing issues in Moodle CMS',
				],
				technologies: [
					'html',
					'css',
					'js',
					'h5p',
					'jquery',
					'php',
					'moodle',
				],
			},
			{
				name: 'Subivi',
				link: 'https://subivi.com/',
				role: 'Front-End Engineer',
				description:
					'Subivi is a simple eBay CRM. It has full eBay support and helps to save time while using eBay.',
				responsibilities: [
					'designing architecture of a web app;',
					'migrating the project from Redux to MobX state management tool;',
					'migrating codebase from javascript to typescript;',
					'refactoring code;',
					'fixing bugs;',
					'implementing new views & components;',
					'supervising junior developers.',
				],
				technologies: [
					'html',
					'css',
					'sass',
					'js',
					'ts',
					'jss',
					'react',
					'redux',
					'mobx',
					'socketIO',
					'materialUI',
					'webpack',
				],
			},
			{
				name: 'Accessibility Plugin',
				role: 'Front-End Developer',
				description:
					'React plugin for enabling different features on the site for better accessibility.',
				responsibilities: ['implementing plugin'],
				technologies: ['html', 'css', 'sass', 'js', 'react'],
			},
			{
				name: 'SwiPay',
				link: 'https://payment-pay.co.il/',
				role: 'Mobile Developer',
				description: 'React-native prototype app for SwiPay.',
				responsibilities: [
					'adding different new screens with a lot of fields or charts;',
					'fixing bugs in existing forms.',
				],
				technologies: ['js', 'react', 'reactNative'],
			},
			{
				name: 'Supporting existed projects',
				role: 'Front-End Developer',
				responsibilities: [
					'fixing style & js issues;',
					'implementing new changes.',
				],
				technologies: ['html', 'css', 'sass', 'js', 'jquery'],
			},
		],
	},
	{
		company: 'Poshare',
		companyLink: 'https://poshare.com/',
		duration: 'March 2014 - February 2015',
		role: 'Front-End Developer',
		projects: [
			{
				role: 'Front-End Developer',
				description:
					'Poshare is a fashion platform where women can rent or buy designer clothing and accessories at amazing prices.',
				responsibilities: [
					'fixing style and js bugs;',
					'implementing new features in existing workflows.',
				],
				technologies: ['html', 'css', 'sass', 'js', 'jquery'],
			},
		],
	},
	{
		company: 'Freelance',
		duration: '2012 - March 2014',
		role: 'Front-End Developer',
		projects: [
			{
				role: 'Front-End Developer',
				responsibilities: [
					'creating different Landing pages & HTML templates;',
					'fixing style & js issues on existing sites',
				],
				technologies: ['html', 'css', 'sass', 'js', 'jquery', 'php'],
			},
		],
	},
];

export const contacts = [
	{
		Icon: FaLinkedin,
		link: 'https://www.linkedin.com/in/dima-danyliuk-a689aba3/',
		label: 'LinkedIn',
	},
	{
		Icon: FaGithub,
		link: 'https://github.com/dima7a14',
		label: 'Github',
	},
	{
		Icon: FaSkype,
		link: 'skype:dima7a14?chat',
		label: 'Skype',
	},
	{
		Icon: FaEnvelope,
		link: 'mailto:byte4byte007@gmail.com',
		label: 'E-mail',
	},
];

export const about = {
	title: 'Dima Danyliuk',
	subTitle: 'Front-End Developer',
	contacts,
	bio: [
		'I am a developer with a passion for learning new things, reading different books, and playing unique indie games.',
		'Also, I have a dream to create some meaningful projects and build my own custom robot.',
		'Feel free to contact me if you have any questions.',
	],
};

export const education = [
	"Poltava National Technical University, master's degree in computer systems and networks in 2016.",
];

export const languages = ['js', 'ts', 'python', 'dart'];

export const mainSkills = [
	'react',
	'next',
	'solidJS',
	'redux',
	'mobx',
	'reactQuery',
	'trpc',
	'formik',
	'reactFinalForm',
	'materialUI',
	'chakraUI',
	'bootstrap',
	'tailwind',
	'prebid',
	'node',
	'fastify',
	'knex',
	'django',
	'drf',
	'webpack',
	'vite',
	'eslint',
	'prettier',
];

export const additionalSkills = [
	'vue',
	'jquery',
	'sass',
	'reduxSaga',
	'flutter',
	'flask',
	'reactNative',
	'suppabase',
	'postgresql',
	'express',
];
