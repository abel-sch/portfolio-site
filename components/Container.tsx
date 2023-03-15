import {ReactNode} from 'react';

interface Props {
    children: ReactNode
}

export default function Container(props: Props) {
    const {children} = props;

    return (
        <section className='px-4 lg:px-16'>
            <div className='w-full max-w-screen-lg flex justify-center mx-auto'>
                { children } 
            </div>
        </section>
    )
}