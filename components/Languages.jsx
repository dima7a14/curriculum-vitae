import clsx from 'clsx';

import { languages } from '../consts/data';
import technologies from '../consts/technologies';
import { getLevelColors } from './Technology';
import Heading from './Heading';

export default function Languages() {
	const items = languages.map((lang) => technologies[lang]);

	if (items.length === 0) return null;

	return (
		<>
			<Heading text="Languages" />
			<ul className="flex flex-col flex-nowrap space-y-2 relative">
				{items.map(({ name, level, experience, Icon }) => (
					<li
						key={name}
						className={clsx(
							'flex flex-row flex-nowrap p-4 text-white text-xl font-semibold items-center space-x-4 drop-shadow-md',
							getLevelColors(level).bg
						)}
					>
						<Icon className="text-4xl" />
						<span>
							{name} ({experience})
						</span>
					</li>
				))}
			</ul>
		</>
	);
}
