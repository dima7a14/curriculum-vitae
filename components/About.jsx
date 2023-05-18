import Image from 'next/image';

import { about } from '../consts/data';
import profilePic from '../public/profile.jpg';
import Heading from './Heading';

function About() {
	return (
		<section>
			<Heading text="About" />
			<div>
				<div>
					<h3>{about.title}</h3>
					<h4>{about.subTitle}</h4>
				</div>
				<div>
					<Image
						src={profilePic}
						alt={about.title}
						width={192}
						height={192}
					/>
				</div>
			</div>
			<div>
				<ul>
					{about.contacts.map(({ Icon, link, label }) => (
						<li key={link}>
							<a
								href={link}
								target="_blank"
								rel="noreferrer"
								label={label}
							>
								<Icon className="w-6 sm:w-8 md:w-10 h-6 sm:h-6 md:h-10" />
								<span>{label}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default About;
