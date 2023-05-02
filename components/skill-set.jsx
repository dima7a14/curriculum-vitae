'use client';

import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { BiSortAlt2 } from 'react-icons/bi';
import dayjs from 'dayjs';

import Technology from './technology';
import Button from './button';

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
	initial: {
		label: '',
		next: 'known',
		sort: () => 0,
	},
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
		next: 'initial',
		sort: sortByFavorite,
	},
};

function SortButton({ onSort }) {
	const [order, setOrder] = useState('initial');
	const sortState = SORT_STATES[order];
	const handleClick = () => {
		setOrder(sortState.next);
		onSort(sortState.next);
	};

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.div
				key={order}
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.1 }}
				className="flex flex-row justify-end -mt-6 mb-4 sm:-mt-16 sm:mb-8"
			>
				<Button
					onClick={handleClick}
					className="px-2 flex flex-row flex-nowrap space-x-2 items-center"
				>
					{sortState.label && <span>{sortState.label}</span>}
					<BiSortAlt2 />
				</Button>
			</motion.div>
		</AnimatePresence>
	);
}

SortButton.propTypes = {
	onSort: PropTypes.func.isRequired,
};

function SkillSet({ skills }) {
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
		<div>
			<SortButton onSort={handleSort} />
			<Reorder.Group
				variants={techAnimation}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="flex flex-row flex-wrap items-center"
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
		</div>
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

export default SkillSet;
