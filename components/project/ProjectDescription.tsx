interface Props {
    intro: string,
    content: string,
    title: string
}

export default function ProjectDescription(props: Props) {
    const {
        intro,
        content,
        title
    } = props;

    return (
        <div className="text-white p-4 pt-16 lg:p-24 lg:py-28 mx-auto relative overflow-hidden">
            { title && <h1 className="absolute top-0 left-0 text-[10rem] lg:text-[15rem] font-bold -translate-y-1/2 opacity-5">{title}</h1> }
            <div className="mx-auto flex max-w-screen-lg">
                <div className="prose prose-invert">
                    { intro && <div className="text-2xl lg:text-4xl lg:leading-snug leading-normal" dangerouslySetInnerHTML={{__html: intro}}></div> }
                    { content && <div className="text-lg" dangerouslySetInnerHTML={{__html: content}}></div> }
                </div>
            </div>
        </div>
    );
}