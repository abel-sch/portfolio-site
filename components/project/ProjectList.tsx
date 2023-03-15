import {useState} from 'react';
import ProjectTile from "./ProjectTile";

type project = {
    title: string,
    slug: string,
    thumbnail: string
}

interface Props {
    projects: project[]
}

export default function ProjectList(props: Props) {
    const {
        projects
    } = props;

    return (
        <ul className='mt-24'>
        { projects.map(project => (
            <li key={project.slug}>
                <ProjectTile project={project}/>
            </li>
        ))}
        </ul>
    );
}
