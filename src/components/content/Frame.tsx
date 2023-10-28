import Container from '@components/Container';
import {useState} from 'react';

export type Frame = {
    _type: 'frame'
    url: string
    html?: string
}

export default function Frame(props: Frame) {
    const {
        url,
        html
    } = props;

    const [isActive, setIsActive] = useState(false);

    return (
        <Container>
            <figure className='w-full mb-12 lg:mb-24 hidden lg:block'>
                <div className={`w-full relative aspect-video rounded overflow-hidden mb-8
                    ${isActive ? '' : 'opacity-30 hover:opacity-100 transition' }
                `}>
                    { isActive && (
                        <div className='absolute bg-white inset-0 top-8'>
                            <iframe src={url} className='w-full h-full'/>
                        </div>
                    )}
                    { !isActive && (
                        <button onClick={() => setIsActive(true)} className='absolute bg-dark-grey inset-0 top-8 flex justify-center items-center'>
                            <div className='text-lg text-white'>Bekijk website</div>
                        </button>
                    )}
                    <div className='absolute bg-grey left-0 top-0 h-8 right-0'></div>
                </div>
                { html && <figcaption className="prose prose-xs mx-auto prose-grey prose-a:text-grey prose-invert w-full md:col-span-3 text-grey text-center -mt-4 text-xs" dangerouslySetInnerHTML={{__html: html}}/> }
            </figure>
        </Container>
    );
}