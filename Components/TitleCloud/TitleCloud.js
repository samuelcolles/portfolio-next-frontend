import React from 'react'
import Style from './titleCloud.module.scss'
import { motion } from "framer-motion"
import slideUp from "../../animations/slideUp"

const TitleCloud = () => {
    return <motion.div
        className={Style.root}
        initial="hidden"
        variants={slideUp}
        whileInView="visible"
        viewport={{ once: true }}
    >
        <div className={Style.container}>
            <img className={Style.cloud1} src="/clouds/WebCloud1.svg" />
            <img className={Style.cloud2} src="/clouds/WebCloud2.svg" />
        </div>
    </motion.div>
}

export default TitleCloud