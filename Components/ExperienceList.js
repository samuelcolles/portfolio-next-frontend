import ExperienceItem from "./ExperienceItem"


export default function ExperienceList({experienceList}){
    return (<article className="container vertical-card">
        <div>
            <h1 className="card-heading"><b>{experienceList.attributes.company}</b> - <i>{experienceList.attributes.jobTitle}</i></h1>
            <h2>{experienceList.attributes.startDate} - {experienceList.attributes.endDate}</h2>
        </div>
        <ul>{experienceList.attributes.duty.map(item=><ExperienceItem key={item.id} experienceItem={item} />)}</ul>
    </article>)
}