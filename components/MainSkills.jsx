'use client';

import { mainSkills } from '../consts/data';
import technologies from '../consts/technologies';
import Heading from './Heading';
import SkillSet from './SkillSet';

export default function MainSkills() {
	const items = mainSkills.map((skill) => technologies[skill]);

	if (items.length === 0) return null;

	return (
		<>
			<Heading text="Main skills" />
			<div className="relative">
				<SkillSet skills={items} />
			</div>
		</>
	);
}
