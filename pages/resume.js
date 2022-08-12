
import SkillList from '../Components/SkillList'
import ExperienceList from '../Components/ExperienceList'
import CertificationCard from '../Components/CertificationCard'

export default function Resume(props) {
  return <>
    <div className='background-box background-sky'>
      <article className='grid-1-col container'>
        {props.skillLists.map(list => <SkillList key={list.id} skillList={list} />)}
      </article>
    </div>
    <div className='background-box background-color-a-light'>
      <div className='grid-2-col container'>
        {props.certifications.map(item=><CertificationCard key={item.id} certification={item} />)}
      </div>
    </div>
    <div className='background-box background-sky-2'>
      <article className='grid-1-col container'>
        {props.experienceLists.map(list => <ExperienceList key={list.id} experienceList={list} />)}
      </article>
    </div>


  </>
}
export const getStaticProps = async () => {
  const resSkillList = await fetch(process.env.STRAPI_BACKEND_URL + '/api/skill-lists?populate=skill')
  const skillLists = await resSkillList.json()
  const resCertification = await fetch(process.env.STRAPI_BACKEND_URL + '/api/certifications?populate=badge')
  const certifications = await resCertification.json()
  const resExperience = await fetch(process.env.STRAPI_BACKEND_URL + '/api/experiences?populate=duty')
  const experience = await resExperience.json()

  return {
    props: {
      skillLists: skillLists.data,
      experienceLists: experience.data,
      certifications: certifications.data
    }
  }
}
