import path from 'path';
import glob from 'glob';

export default async function getSlugs(pattern) {
	try {
		const filenames = await new Promise((resolve, reject) => {
			glob(path.join(process.cwd(), pattern), (err, files) => {
				if (err) {
					reject(err);
				} else {
					resolve(files);
				}
			});
		});

		const paths = filenames
			.filter(p => !(/index\.md/i).test(p))
			.map(filename => ({
				params: {
					slug: path.parse(filename).name
				}
			}));

		return {
			paths,
			fallback: false
		};
	} catch (error) {
		throw error;
	}
}
