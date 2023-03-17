import path from 'path';
import glob from 'glob';
import getContent from '@scripts/content/getContent';

export default async function getPages() {
	const pattern = `content/**.md`;

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

		const pages = await Promise.all(filenames.map(async filename => {
			const file = path.parse(filename);
			const content = await getContent(`${file.base}`);

			return {
				title: content?.attributes?.title,
				slug: `/${content?.slug}`
			}
		}));

		return pages.filter(page => (page.title && page.slug));
	} catch (error) {
		throw error;
	}
}