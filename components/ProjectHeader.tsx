import Image from 'next/image';

interface Props {
    featured_image: string
}

export default function ProjectHeader(props: Props) {
    const {
        featured_image
    } = props;

    return (
        <header className="bg-white w-full flex justify-center py-8 lg:py-16">
            <div className="max-w-screen-lg w-full aspect-video relative">
                <Image
                    src={featured_image}
                    alt=""
                    fill
                    priority
                />
            </div>
        </header>
    )
}