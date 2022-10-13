import SkillList from "../Components/Skill/SkillList";
import ExperienceList from "../Components/Experience/ExperienceList";
import CertificationCard from "../Components/CertificationCard/CertificationCard";
import ToolList from "../Components/ToolList/ToolList";

export default function Resume(props) {
  return (
    <>
      <div className="background-box ">
        <article className="grid-1-col container">
          {props.skillLists.map(list => (
            <SkillList key={list.id} skillList={list} />
          ))}
          {props.toolLists.map(list => (
            <ToolList key={list.id} toolList={list} />
          ))}
        </article>
      </div>
      <div className="background-box ">
        <div className="grid-2-col container">
          {props.certifications.map(item => (
            <CertificationCard key={item.id} certification={item} />
          ))}
        </div>
      </div>
      <div className="background-box ">
        <article className="grid-1-col container">
          {props.experienceLists.map(list => (
            <ExperienceList key={list.id} experienceList={list} />
          ))}
        </article>
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  const resSkillList = await fetch(
    process.env.STRAPI_BACKEND_URL +
      "/api/skill-lists?populate=skill&sort=title"
  );
  const skillLists = await resSkillList.json();
  const resCertification = await fetch(
    process.env.STRAPI_BACKEND_URL + "/api/certifications?populate=badge"
  );
  const certifications = await resCertification.json();
  const resExperience = await fetch(
    process.env.STRAPI_BACKEND_URL + "/api/experiences?populate=duty"
  );
  const experience = await resExperience.json();
  const resToolLists = await fetch(
    process.env.STRAPI_BACKEND_URL +
      "/api/tool-lists?populate[0]=tools&populate[1]=tools.icon&populate[2]=tools.nestedtools&populate[3]=tools.nestedtools.icon"
  );
  const toolLists = await resToolLists.json();

  return {
    props: {
      skillLists: skillLists.data,
      experienceLists: experience.data,
      certifications: certifications.data,
      toolLists: toolLists.data,
    },
  };
};
