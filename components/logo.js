import { Button } from 'antd';

import links from '../consts/links';

function Logo() {
	const link = links[1];

	return (
		<Button
			size="large"
			href={link.link}
			target="_blank"
			style={{
				width: 64,
				lineHeight: '64px',
				height: 64,
				paddingTop: 0,
				padding: 0,
			}}
		>
			{<link.cmp style={{ fontSize: 36, verticalAlign: 'middle' }} />}
		</Button>
	);
}

export default Logo;
