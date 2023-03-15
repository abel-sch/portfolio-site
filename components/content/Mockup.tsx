interface Props {
    type: string,
    video: string
}

export default function Mockup(props: Props) {
    const {
        video
    } = props;

    return (
        <section className="w-full bg-grey py-8 lg:py-24 flex justify-center mb-12 lg:mb-24">
            { video && (
                <video className="max-w-screen-sm w-full" autoPlay muted loop playsInline>
                    <source src={video} type="video/mp4"/>
                </video>
            )}
        </section>
    )
}