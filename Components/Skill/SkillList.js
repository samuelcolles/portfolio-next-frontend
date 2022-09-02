import React from "react"
import Style from "./skillList.module.scss"

export default function SkillList({ skillList }) {
    return (
        <section className={Style.root + " container"}>
            <h1 className="card-heading">{skillList.attributes.title}</h1>
            <ul className="card-body">
                {skillList.attributes.skill.map((skill, index) => <li key={index}>{skill.content}</li>)}
            </ul>
        </section>
    )
}