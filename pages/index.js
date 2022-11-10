import ProjectCard from "../Components/ProjectCard/ProjectCard";
import TitleCloud from "../Components/TitleCloud/TitleCloud";

export default function Home({ projects }) {
  return <>
      <TitleCloud />
      <div className="background-box">
        <div className="grid-1-col container">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
}
export const getStaticProps = async () => {
  const resProjects = await fetch(
    process.env.STRAPI_BACKEND_URL + "/api/projects?populate=*&sort=order"
  );
  const projects = await resProjects.json();
  console.log(projects)

  return {
    props: {
      projects: projects.data,
    },
  };
};
