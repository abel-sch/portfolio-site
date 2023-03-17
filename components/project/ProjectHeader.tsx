import Image from 'next/image';

interface Props {
    featuredImage: string,
    type?: string
    video?: string,
    color: string
}

export default function ProjectHeader(props: Props) {
    const {
        featuredImage,
        type,
        video = '',
        color
    } = props;

    const colors = {
        'white': 'bg-white',
        'black': 'bg-pure-black'
    };


    console.log(type);
    const getBackgroundColorClass = () => {
        switch (color) {
            case 'black':
            return colors['black'];
            case 'white':
            return colors['white'];
            default:
            return false;
        }
    }

    const backgroundColorClass = getBackgroundColorClass();
    const style = !backgroundColorClass ? {
        backgroundColor: color
    } : {};

    return (
        <header style={style} className={`w-full flex justify-center py-8 lg:py-16 ${backgroundColorClass}`}>
            <div className="max-w-screen-lg w-full aspect-video relative">
                { type == 'image' && (
                    <Image
                        src={featuredImage}
                        alt=""
                        fill
                        priority
                    />
                )}
                { type == 'video' && (
                    <video autoPlay muted loop playsInline>
                        <source src={video} type="video/mp4"/>
                    </video>
                )}
            </div>
        </header>
    )
}