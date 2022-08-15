import SkillItem from "./SkillItem"

export default function SkillList({skillList}){
    return (


    <section className="container vertical-card">
        <h1 className="card-heading">{skillList.attributes.title}</h1>
        <ul className="card-body">{skillList.attributes.skill.map(skill=><SkillItem key={skill.id} skillItem={skill} />)}</ul>
    </section>
)
}