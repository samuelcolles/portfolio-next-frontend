import React from "react"
import Style from "./skillList.module.scss"
import { motion } from "framer-motion"
import slideUp from "../../animations/slideUp"

export default function SkillList({ skillList }) {
    return (
        <motion.section 
        className={Style.root + " container"}
        initial="hidden"
        variants={slideUp}
        whileInView="visible"
        viewport={{ once: true }}
        >
            <h1 className="card-heading">{skillList.attributes.title}</h1>
            <ul className="card-body">
                {skillList.attributes.skill.map((skill, index) => <li key={index}>{skill.content}</li>)}
            </ul>
        </motion.section>
    )
}