import {useState} from 'react';
import ProjectTile from "./ProjectTile";

type project = {
	title: string
	slug: string
	thumbnail: string
}

interface Props {
	projects: project[]
	currentProject: string | null
}

export default function ProjectList(props: Props) {
	const {
		projects,
		currentProject = ''
	} = props;

	return (
		<ul className='mt-24'>
			{ projects.filter(project => project.title != currentProject).map(project => (
				<li key={project.slug}>
					<ProjectTile project={project}/>
				</li>
			))}
		</ul>
	);
}
