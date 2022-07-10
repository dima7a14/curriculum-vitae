export default function getLevelColors(level) {
	switch (level) {
		case 1:
			return {
				text: 'text-red-500 dark:text-red-500',
				bg: 'bg-red-500 dark:bg-red-500',
				border: 'border-red-500 dark:border-red-500',
			};
		case 2:
			return {
				text: 'text-orange-500 dark:text-orange-500',
				bg: 'bg-orange-500 dark:bg-orange-500',
				border: 'border-orange-500 dark:border-orange-500',
			};
		case 3:
			return {
				text: 'text-yellow-500 dark:text-yellow-500',
				bg: 'bg-yellow-500 dark:bg-yellow-500',
				border: 'border-yellow-500 dark:border-yellow-500',
			};
		case 4:
			return {
				text: 'text-lime-500 dark:text-lime-500',
				bg: 'bg-lime-500 dark:bg-lime-500',
				border: 'border-lime-500 dark:border-lime-500',
			};
		case 5:
			return {
				text: 'text-green-500 dark:text-green-500',
				bg: 'bg-green-500 dark:bg-green-500',
				border: 'border-green-500 dark:border-green-500',
			};
		default:
			return {
				text: 'text-gray-800 dark:text-white',
				bg: 'bg-gray-800 dark:bg-white',
				border: 'border-gray-800 dark:border-white',
			};
	}
}
