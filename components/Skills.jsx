'use client';

import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { mainSkills, additionalSkills } from '../consts/data';
import technologies from '../consts/technologies';
import Heading from './Heading';
import Languages from './Languages';
import SkillSet from './SkillSet';

function SkillsBlock({ title, items }) {
	if (items.length === 0) return null;

	return (
		<div className="mt-4">
			<Heading text={title} />
			<div className="relative p-2 md:p-4">
				<SkillSet skills={items} />
			</div>
		</div>
	);
}

SkillsBlock.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			level: PropTypes.number.isRequired,
			Icon: PropTypes.func,
		})
	).isRequired,
};

const MemoizedSkillsBlock = memo(SkillsBlock);

export default function Skills() {
	const mainSkillsItems = useMemo(
		() => mainSkills.map((skill) => technologies[skill]),
		[]
	);
	const additionalSkillsItems = useMemo(
		() => additionalSkills.map((skill) => technologies[skill]),
		[]
	);

	return (
		<section className="mt-2 md:mt-4">
			<Languages />
			<MemoizedSkillsBlock title="Main skills" items={mainSkillsItems} />
			<MemoizedSkillsBlock
				title="Additional skills"
				items={additionalSkillsItems}
			/>
		</section>
	);
}
