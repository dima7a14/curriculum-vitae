import PropTypes from 'prop-types';

function Heading({ text }) {
	const letters = text.split('');

	return (
		<h2 className="font-cursive text-6xl p-4 relative reflect">
			{letters.map((letter, index) => (
				<span
					key={index}
					style={{ '--i': index + 1 }}
					className="relative inline-block animate-wobble"
				>
					{letter}
				</span>
			))}
		</h2>
	);
}

Heading.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Heading;
