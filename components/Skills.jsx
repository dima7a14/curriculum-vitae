import { languages, mainSkills, additionalSkills } from '../consts/data';
import technologies from '../consts/technologies';
import Heading from './Heading';
import Languages from './Languages';
import MainSkills from './MainSkills';

export default function Skills() {
	return (
		<section className="mt-2 md:mt-4">
			<Languages />
			<MainSkills />
		</section>
	);
}
