import path from 'path';
import glob from 'glob';

export default async function getPages() {
	try {
		const pattern = 'content/**.md';
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
			.map(filename => path.parse(filename).name);

		const pages = await Promise.all(paths.map(async path => {
			const {attributes} = await import(`content/${path}.md`);

			return {
				slug: `/${path}`,
				...attributes,
			};
		}));

		return pages;

	} catch (error) {
		throw error;
	}

}