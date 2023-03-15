import {useEffect, useLayoutEffect} from 'react';

const funk = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export default funk;