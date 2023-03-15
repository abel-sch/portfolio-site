import Image from "next/image";
import Link from "next/link";

type project = {
    title: string,
    slug: string,
    thumbnail: string
}

interface Props {
    project: project
}

export default function ProjectTile(props: Props) {
    const {
        project
    } = props;

    return (
        <Link
            href={project.slug}
            className={`
                bg-white text-8xl lg:text-[10rem] font-bold px-4 py-16 lg:p-8 block group
                hover:text-white hover:bg-black
                transition ease-in-out duration-700
                relative overflow-hidden
            `}
        >
        {project.title}
        <Image
            src={project.thumbnail}
            className={`
                opacity-0 group-hover:opacity-100 scale group-hover:scale-110
                ease-in-out duration-700 transition object-contain`}
            alt=''
            fill
        />
    </Link>
    )
}