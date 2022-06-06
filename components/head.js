import NextHead from 'next/head';

function Head({ title = 'Curriculum Vitae' }) {
	return (
		<NextHead>
			<title>Dima Danyliuk - {title}</title>
		</NextHead>
	);
}

export default Head;
