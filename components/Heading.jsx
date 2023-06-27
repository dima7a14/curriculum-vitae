import PropTypes from 'prop-types';

function Heading({ text, animate = false }) {
	return (
		<h2 className="mb-4 md:mb-8 font-cursive text-4xl md:text-6xl relative reflect text-sky-700 dark:text-purple-300 text-center">
			{animate
				? text.split('').map((letter, index) => (
						<span
							key={index}
							style={{ '--i': index + 1 }}
							className="relative inline-block animate-wobble"
						>
							{letter}
						</span>
				  ))
				: text}
		</h2>
	);
}

Heading.propTypes = {
	text: PropTypes.string.isRequired,
	animate: PropTypes.bool,
};

export default Heading;
