import path from 'path';
import glob from 'glob';
import getContent from '@scripts/content/getContent';

export default async function getProjects(folder:) {
    const pattern = `content/${folder}/**.md`;

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

        const projects = await Promise.all(filenames.map(async filename => {
            const file = path.parse(filename);
			const content = await getContent(`${folder}/${file.base}`);

            return {
                title: content?.attributes?.title,
                thumbnail: content?.attributes?.thumbnail,
                slug: `${folder}/${file.name}`
            }
        }));

        console.log(projects);

		return projects;
	} catch (error) {
		throw error;
	}
}