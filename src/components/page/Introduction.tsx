'use client'

import { motion } from "framer-motion"
import { PropsWithChildren } from "react"

export default function Introduction({ children} : PropsWithChildren) {
    return (
        <motion.div
        initial="initial"
        animate="animate"
        transition={{ duration: 1}}
        exit="exit"
        className="px-4 grid grid-cols-12 gap-4 w-full"
        >
        <div
            className="col-span-12 md:col-span-9 md:col-start-4 lg:col-start-6 lg:col-span-6 prose prose-invert prose-xl lg:mb-24"
            >
                { children }
        </div>
    </motion.div>
    )
}