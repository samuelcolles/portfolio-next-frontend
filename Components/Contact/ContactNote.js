import React from 'react'
import Style from './contactNote.module.scss'
import { motion } from "framer-motion"
import slideUp from "../../animations/slideUp"

const ContactNote = () => {
    return <motion.div 
        className={Style.root}
        initial="hidden"
        variants={slideUp}
        whileInView="visible"
        viewport={{ once: true }}
    >
        <p>Feel free to contact me at <a href="mailto:samueltaziocolles@hotmail.com">samueltaziocolles@hotmail.com</a></p>
        <p>*References are Available upon request.</p>
    </motion.div>
}

export default ContactNote