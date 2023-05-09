import ProjectTile from "./ProjectTile";

type Project = {
	title: string
	slug: string
	thumbnail?: string
}

interface Props {
	projects: Project[]
	currentProject?: string | null
	className?: string | null
}

export default function ProjectList(props: Props) {
	const {
		projects,
		currentProject = '',
		className
	} = props;

	if (projects.length <= 0) return <></>;

	return (
		<ul className={className || 'mt-24'}>
			{ projects.filter(project => project.title != currentProject).map(project => (
				<li key={project.slug}>
					<ProjectTile project={project}/>
				</li>
			))}
		</ul>
	);
}
