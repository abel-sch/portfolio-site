export default function getFileMap(context, {
	lowerCaseKeys = false,
	useDefault = false,
	stripExtension = false,
	prefix = ''
} = {}) {
	const keys = context.keys();
	const values = keys.map(context);

	return keys.reduce((o, k, i) => {
		const match = (/(\.[\\/])?(.+?$)/).exec(k);
		let key = match ? match[2] : k;
		let value = values[i];

		if (lowerCaseKeys) {
			key = key.toLowerCase();
		}

		if (stripExtension) {
			key = key.replace(/\.(.+?)$/, '');
		}

		if (useDefault) {
			value = value.default;
		}

		o[`${prefix}${key}`] = value;

		return o;
	}, {});
}