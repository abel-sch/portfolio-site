import {forwardRef, ForwardRefRenderFunction} from 'react';
import useIsomorphicLayoutEffect from '@scripts/hooks/useIsomorphicLayoutEffect';
import smoothScroller from '@scripts/utils/SmoothScroller';

type Props = {
    children: JSX.Element,
}

type RefProps = {
    current: HTMLElement | undefined
}

const SmoothScollContainer: ForwardRefRenderFunction<HTMLElement, Props> = (props, ref) => {
    const {
        children
    } = props;

    useIsomorphicLayoutEffect(() => {
        const node = ref?.current;

        smoothScroller.scrollFactor = 1;
        smoothScroller.setContent(node);

        console.log(node);

		return () => {
			console.log(`remove smooth scrolling from ${node.nodeName}.${node.className}`);

			smoothScroller.remove(node);
		};
	}, [ref]);


    return (
		<div className="flex flex-col" data-is-content="true" ref={ref} >
			{children}
		</div>
	);
}
  
export default forwardRef(SmoothScollContainer);