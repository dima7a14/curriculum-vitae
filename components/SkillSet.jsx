'use client';

import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Reorder } from 'framer-motion';
import dayjs from 'dayjs';

import Technology from './Technology';
import Button from './Button';

const techAnimation = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const techItemAnimation = {
	hidden: { opacity: 0, y: 60 },
	visible: { opacity: 1, y: 0 },
};

function sortByLevel(a, b) {
	return b.level - a.level;
}

const DATE_FORMAT = 'YYYY-MM-DD';

function sortByUsage(a, b) {
	const dateA = dayjs(a.lastUsage, DATE_FORMAT);
	const dateB = dayjs(b.lastUsage, DATE_FORMAT);

	if (dateA.isBefore(dateB)) {
		return 1;
	}

	if (dateA.isSame(dateB)) {
		return 0;
	}

	return -1;
}

function sortByFavorite(a, b) {
	if (a.favorite && !b.favorite) {
		return -1;
	}

	if (b.favorite && !a.favorite) {
		return 1;
	}

	return 0;
}

const SORT_STATES = {
	known: {
		label: 'Well known',
		next: 'recent',
		sort: sortByLevel,
	},
	recent: {
		label: 'Recently used',
		next: 'favorite',
		sort: sortByUsage,
	},
	favorite: {
		label: 'Favorite',
		next: 'known',
		sort: sortByFavorite,
	},
};

function SortPanel({ onSort }) {
	const [activeOrder, setActiveOrder] = useState('known');

	return (
		<ul className="flex flex-row flex-nowrap p-1 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white space-x-2 mb-4">
			{Object.keys(SORT_STATES).map((key) => {
				const order = SORT_STATES[key];
				const isActive = key === activeOrder;
				const handleClick = () => {
					setActiveOrder(key);
					onSort(key);
				};

				return (
					<li key={key} className={clsx('flex-auto')}>
						<Button
							onClick={handleClick}
							variant="outline"
							className={clsx(
								'block p-2 text-sm text-center w-full shadow-none rounded',
								isActive && 'bg-gray-300 dark:bg-gray-800'
							)}
						>
							{order.label}
						</Button>
					</li>
				);
			})}
		</ul>
	);
}

SortPanel.propTypes = {
	onSort: PropTypes.func.isRequired,
};

export default function SkillSet({ skills }) {
	const [sortedSkills, setSortedSkills] = useState(skills);
	const handleSort = useCallback(
		(order) => {
			const sortFn = SORT_STATES[order].sort;
			const nextSkills = [...skills];

			nextSkills.sort(sortFn);

			setSortedSkills(nextSkills);
		},
		[skills, setSortedSkills]
	);

	useEffect(() => {
		setSortedSkills(skills);
	}, [skills]);

	return (
		<>
			<SortPanel onSort={handleSort} />
			<Reorder.Group
				variants={techAnimation}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="flex flex-row flex-wrap items-center justify-center md:justify-start"
				values={sortedSkills}
				axis="x"
				onReorder={setSortedSkills}
				as="div"
			>
				{sortedSkills.map((value) => (
					<Reorder.Item
						key={value.name}
						value={value}
						variants={techItemAnimation}
						as="div"
						drag={false}
					>
						<Technology
							name={value.name}
							Icon={value.Icon}
							level={value.level}
							className="mb-2 mr-2"
						/>
					</Reorder.Item>
				))}
			</Reorder.Group>
			{/* <motion.div
				variants={techAnimation}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="flex flex-row flex-wrap items-center"
			>
				{sortedSkills.map(({ name, level, Icon }) => (
					<motion.div key={name} variants={techItemAnimation}>
						<Technology
							name={name}
							Icon={Icon}
							level={level}
							className="mb-2 mr-2"
						/>
					</motion.div>
				))}
			</motion.div> */}
		</>
	);
}

SkillSet.propTypes = {
	skills: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			level: PropTypes.number.isRequired,
			Icon: PropTypes.func,
		})
	).isRequired,
};
