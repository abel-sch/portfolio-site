import {SmoothScroller} from '@monokai/monomove';

const smoothScroller = process.browser ? new SmoothScroller() : null;

export default smoothScroller;