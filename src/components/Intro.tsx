'use client';
import { animate, timeline } from "motion";
import { useEffect, useState, useRef } from "react";

const draw = (progress: number) => ({
    strokeDashoffset: 1 - progress,
    visibility: "visible",
})

const easeInOut = (t: number, p = 2) =>
  t <= 0.5
    ? Math.pow(t * 2, p) / 2
    : 1 - Math.pow(2 - t * 2, p) / 2

const interpolate = (start: number, end: number, progress: number) => start + (end - start) * progress
    
export default function Introduction() {
    const mainLine = useRef<SVGPathElement>(null)
    const horizontalLine = useRef<SVGPathElement>(null)
    const wrapper = useRef<HTMLDivElement>(null)
    const [isInit, setIsInit] = useState(false)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const initialPath = `M ${width*.5 - 50},${height*.5 + 50} ${width*.5 - 50},${height*.5 - 50} ${width*.5 + 50},${height*.5 - 50} ${width*.5+50},${height * .5 + 50}`
    const initialLine = `M${width*.5 - 50},${height*.5} ${width*.5 + 50},${height*.5}`
    const expand = (progress: number) => (
        `M ${interpolate(width*.5 - 50, 50, progress)},${interpolate(height*.5 + 50, height, progress)} ${interpolate(width*.5 - 50, 50, progress)},${interpolate(height*.5 - 50, 50, progress)} ${interpolate(width*.5 + 50, width - 50, progress)},${interpolate(height*.5 - 50, 50, progress)} ${interpolate(width*.5+50, width - 50, progress)},${interpolate(height * .5 + 50, height, progress)}`
    )

    useEffect(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        if (mainLine.current && horizontalLine.current) {
            const tl = timeline([
                [mainLine.current, draw(1/3), { duration: 0.1, easing: 'ease-out', delay: 0.5}],
                [mainLine.current, draw(2/3), { duration: 0.1, easing: 'ease-out'}],
                [mainLine.current, draw(1), { duration: 0.1, easing: 'ease-out'}],
                [horizontalLine.current, draw(1), { duration: 0.3, delay: .1, easing: 'ease-out'}],
            ], {
                endDelay: .3,
                defaultOptions: { easing: easeInOut }
            })
            tl.finished.then(() => {
                setIsInit(true)
            })

            return () => tl.stop()
        }
    }, [])

    useEffect(() => {
        if (isInit && mainLine.current && horizontalLine.current) {
            if (mainLine.current != null && horizontalLine.current != null) {
                const animation = animate((progress) => {
                    if (mainLine.current == null) return
                    mainLine.current.setAttribute("d", expand(progress))
                });
                
                animate((progress) => {
                    if (horizontalLine.current == null) return
                    const path = `M${interpolate(width*.5 - 50, 50, progress)},${height*.5} ${interpolate(width*.5 + 50, width - 50, progress)},${height*.5}`
                    horizontalLine.current.setAttribute("d", path)
                    
                })
                animate([mainLine.current, horizontalLine.current], { strokeWidth: 100});
            }
        }
    }, [isInit])
    
    return (
        <div 
            ref={wrapper}
            className="fixed inset-0 bg-black"
        >
            <svg style={{
                    width: '100%',
                    height: '100%',
                }}>
                <path
                    ref={mainLine}
                    className="stroke-grey"
                    pathLength="1"
                    style={{
                        strokeWidth: 20,
                        strokeDasharray: 1,
                        strokeDashoffset: 1,
                        fill: "transparent",
                    }}
                    d={initialPath}
                >
                </path>
                <path
                    ref={horizontalLine}
                    className="stroke-grey"
                    pathLength="1"
                    style={{
                        strokeWidth: 20,
                        strokeDasharray: 1,
                        strokeDashoffset: 1,
                        fill: "transparent",
                    }}
                    d={initialLine}
                >

                </path>
            </svg>
        </div>
    )
}