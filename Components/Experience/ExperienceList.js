import React from "react"
import Style from "./experienceList.module.scss"
import { motion } from "framer-motion"
import slideUp from "../../animations/slideUp"

export default function ExperienceList({ experienceList }) {
    return <motion.article 
    initial="hidden"
    variants={slideUp}
    whileInView="visible"
    viewport={{ once: true }}
        className={Style.root + " container"}>
        <div>
            <h1 className="card-heading"><b>{experienceList.attributes.company}</b> - <i>{experienceList.attributes.jobTitle}</i></h1>
            <h2>{experienceList.attributes.startDate} - {experienceList.attributes.endDate}</h2>
        </div>
        <ul>{experienceList.attributes.duty.map((item, index) => <li key={index}>{item.content}</li>)}</ul>
    </motion.article>
}
