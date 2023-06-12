import {
	SiDart,
	SiReact,
	SiMaterialui,
	SiAntdesign,
	SiNextdotjs,
	SiRedux,
	SiMobx,
	SiReduxsaga,
	SiChakraui,
	SiTailwindcss,
	SiDjango,
	SiWebpack,
	SiFlutter,
	SiExpress,
	SiSocketdotio,
	SiFlask,
	SiPostgresql,
	SiFirebase,
	SiMongodb,
	SiSequelize,
	SiPhp,
	SiJss,
	SiNodedotjs,
	SiFastify,
	SiSolid,
	SiTrpc,
	SiVite,
	SiEslint,
	SiPrettier,
} from 'react-icons/si';
import { TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb';
import {
	DiHtml5,
	DiCss3Full,
	DiSass,
	DiJqueryLogo,
	DiGit,
} from 'react-icons/di';
import { BsBootstrapFill } from 'react-icons/bs';
import {
	FaVuejs,
	FaNpm,
	FaGulp,
	FaGrunt,
	FaLinux,
	FaDocker,
	FaPython,
} from 'react-icons/fa';

const technologies = {
	js: {
		name: 'JavaScript',
		level: 5,
		Icon: TbBrandJavascript,
		experience: 'daily usage',
		language: true,
		favorite: false,
		lastUsage: '2022-07-17',
	},
	ts: {
		name: 'TypeScript',
		level: 4,
		Icon: TbBrandTypescript,
		experience: 'daily usage',
		language: true,
		favorite: true,
		lastUsage: '2022-07-15',
	},
	python: {
		name: 'Python',
		level: 3,
		Icon: FaPython,
		experience: 'pet projects',
		language: true,
		favorite: true,
		lastUsage: '2022-07-17',
	},
	dart: {
		name: 'Dart',
		level: 1,
		Icon: SiDart,
		experience: 'experimenting',
		language: true,
		favorite: true,
		lastUsage: '2022-01-23',
	},
	php: {
		name: 'PHP',
		level: 1,
		Icon: SiPhp,
		language: true,
		favorite: false,
		lastUsage: '2014-03-01',
	},
	html: {
		name: 'HTML',
		level: 4,
		Icon: DiHtml5,
		language: false,
		favorite: false,
		lastUsage: '2022-07-17',
	},
	css: {
		name: 'CSS',
		level: 4,
		Icon: DiCss3Full,
		language: false,
		favorite: false,
		lastUsage: '2022-07-17',
	},
	sass: {
		name: 'SCSS',
		level: 3,
		Icon: DiSass,
		language: false,
		favorite: false,
		lastUsage: '2021-10-01',
	},
	jss: {
		name: 'JSS',
		level: 5,
		Icon: SiJss,
		language: false,
		favorite: false,
		lastUsage: '2020-04-01',
	},
	bootstrap: {
		name: 'Bootstrap',
		level: 4,
		Icon: BsBootstrapFill,
		language: false,
		favorite: false,
		lastUsage: '2022-01-20',
	},
	tailwind: {
		name: 'Tailwind CSS',
		level: 4,
		Icon: SiTailwindcss,
		language: false,
		favorite: true,
		lastUsage: '2022-07-17',
	},
	react: {
		name: 'React',
		level: 5,
		Icon: SiReact,
		language: false,
		favorite: true,
		lastUsage: '2022-07-17',
	},
	reactNative: {
		name: 'React Native',
		level: 2,
		Icon: SiReact,
		language: false,
		favorite: false,
		lastUsage: '2017-08-01',
	},
	materialUI: {
		name: 'Material UI',
		level: 3,
		Icon: SiMaterialui,
		language: false,
		favorite: false,
		lastUsage: '2020-09-30',
	},
	chakraUI: {
		name: 'Chakra UI',
		level: 3,
		Icon: SiChakraui,
		language: false,
		favorite: false,
		lastUsage: '2022-05-11',
	},
	antd: {
		name: 'Ant Design',
		level: 3,
		Icon: SiAntdesign,
		language: false,
		favorite: false,
		lastUsage: '2021-10-12',
	},
	next: {
		name: 'Next.js',
		level: 5,
		Icon: SiNextdotjs,
		language: false,
		favorite: true,
		lastUsage: '2022-07-17',
	},
	redux: {
		name: 'Redux',
		level: 5,
		Icon: SiRedux,
		language: false,
		favorite: false,
		lastUsage: '2021-10-12',
	},
	reduxSaga: {
		name: 'Redux Saga',
		level: 2,
		Icon: SiReduxsaga,
		language: false,
		favorite: false,
		lastUsage: '2022-05-01',
	},
	reduxToolkit: {
		name: 'Redux Toolkit',
		level: 2,
		language: false,
		favorite: false,
		lastUsage: '2021-12-20',
	},
	mobx: {
		name: 'MobX',
		level: 5,
		Icon: SiMobx,
		language: false,
		favorite: false,
		lastUsage: '2021-10-12',
	},
	effector: {
		name: 'Effector',
		level: 1,
		language: false,
		favorite: false,
		lastUsage: '2020-12-12',
	},
	reactQuery: {
		name: 'React Query',
		level: 4,
		language: false,
		favorite: true,
		lastUsage: '2022-05-10',
	},
	prebid: {
		name: 'Prebid.js',
		level: 3,
		language: false,
		favorite: false,
		lastUsage: '2022-07-15',
	},
	reactFinalForm: {
		name: 'React Final Form',
		level: 4,
		language: false,
		favorite: false,
		lastUsage: '2021-10-12',
	},
	formik: {
		name: 'Formik',
		level: 3,
		language: false,
		favorite: true,
		lastUsage: '2022-05-11',
	},
	jquery: {
		name: 'jQuery',
		level: 5,
		Icon: DiJqueryLogo,
		language: false,
		favorite: false,
		lastUsage: '2022-07-15',
	},
	vue: {
		name: 'Vue.js',
		level: 2,
		Icon: FaVuejs,
		language: false,
		favorite: false,
		lastUsage: '2020-11-22',
	},
	webpack: {
		name: 'Webpack',
		level: 4,
		Icon: SiWebpack,
		language: false,
		favorite: false,
		lastUsage: '2022-04-01',
	},
	gulpfile: {
		name: 'Gulpfile',
		level: 3,
		Icon: FaGulp,
		language: false,
		favorite: false,
		lastUsage: '2016-05-01',
	},
	grunt: {
		name: 'Grunt',
		level: 2,
		Icon: FaGrunt,
		language: false,
		favorite: false,
		lastUsage: '2014-04-01',
	},
	node: {
		name: 'Node.js',
		level: 3,
		Icon: SiNodedotjs,
		language: false,
		favorite: false,
		lastUsage: '2020-09-30',
	},
	npm: {
		name: 'NPM',
		level: 3,
		Icon: FaNpm,
		language: false,
		favorite: false,
		lastUsage: '2022-07-17',
	},
	docker: {
		name: 'Docker',
		level: 3,
		Icon: FaDocker,
		language: false,
		favorite: true,
		lastUsage: '2021-10-12',
	},
	git: {
		name: 'Git',
		level: 3,
		Icon: DiGit,
		language: false,
		favorite: true,
		lastUsage: '2022-07-17',
	},
	linux: {
		name: 'Linux',
		level: 3,
		Icon: FaLinux,
		language: false,
		favorite: true,
		lastUsage: '2022-07-17',
	},
	django: {
		name: 'Django',
		level: 3,
		Icon: SiDjango,
		language: false,
		favorite: true,
		lastUsage: '2021-10-12',
	},
	drf: {
		name: 'Django REST Framework',
		level: 4,
		language: false,
		favorite: true,
		lastUsage: '2021-10-12',
	},
	flask: {
		name: 'Flask',
		level: 4,
		Icon: SiFlask,
		language: false,
		favorite: false,
		lastUsage: '2022-07-16',
	},
	express: {
		name: 'Express.js',
		level: 4,
		Icon: SiExpress,
		language: false,
		favorite: false,
		lastUsage: '2020-09-30',
	},
	socketIO: {
		name: 'Socket.io',
		level: 3,
		Icon: SiSocketdotio,
		language: false,
		favorite: false,
		lastUsage: '2020-09-30',
	},
	postgresql: {
		name: 'PostgreSQL',
		level: 2,
		Icon: SiPostgresql,
		language: false,
		favorite: false,
		lastUsage: '2022-05-11',
	},
	mongodb: {
		name: 'MongoDB',
		level: 2,
		Icon: SiMongodb,
		language: false,
		favorite: false,
		lastUsage: '2020-09-30',
	},
	sequelize: {
		name: 'Sequelize',
		level: 2,
		Icon: SiSequelize,
		language: false,
		favorite: false,
		lastUsage: '2020-09-30',
	},
	firebase: {
		name: 'Firebase',
		level: 1,
		Icon: SiFirebase,
		language: false,
		favorite: false,
		lastUsage: '2022-07-17',
	},
	suppabase: {
		name: 'Suppabase',
		level: 2,
		language: false,
		favorite: false,
		lastUsage: '2022-05-11',
	},
	flutter: {
		name: 'Flutter',
		level: 1,
		Icon: SiFlutter,
		language: false,
		favorite: true,
		lastUsage: '2022-01-23',
	},
	moodle: {
		name: 'Moodle',
		level: 1,
		language: false,
		favorite: false,
		lastUsage: '2020-05-30',
	},
	h5p: {
		name: 'h5p',
		level: 2,
		language: false,
		favorite: false,
		lastUsage: '2020-05-30',
	},
	fastify: {
		name: 'Fastify',
		level: 4,
		Icon: SiFastify,
		language: false,
		favorite: true,
		lastUsage: '2023-02-13',
	},
	knex: {
		name: 'Knex',
		level: 2,
		language: false,
		favorite: true,
		lastUsage: '2023-02-13',
	},
	solidJS: {
		name: 'Solid.js',
		level: 4,
		Icon: SiSolid,
		language: false,
		favorite: true,
		lastUsage: '2023-02-19',
	},
	trpc: {
		name: 'TRPC',
		level: 3,
		Icon: SiTrpc,
		language: false,
		favorite: true,
		lastUsage: '2022-11-15',
	},
	vite: {
		name: 'Vite',
		level: 2,
		Icon: SiVite,
		language: false,
		favorite: false,
		lastUsage: '2023-02-19',
	},
	eslint: {
		name: 'Eslint',
		level: 4,
		icon: SiEslint,
		language: false,
		favorite: true,
		lastUsage: '2023-05-10',
	},
	prettier: {
		name: 'Prettier',
		level: 5,
		icon: SiPrettier,
		language: false,
		favorite: true,
		lastUsage: '2023-05-10',
	},
};

export default technologies;
