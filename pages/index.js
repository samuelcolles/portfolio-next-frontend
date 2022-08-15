import ProjectCard from '../Components/ProjectCard'
import BackgroundClouds from '../Components/BackgroundClouds'
import TitleCloud from '../Components/TitleCloud'

export default function Home({ projects }) {

  return <>
    <BackgroundClouds />
    <TitleCloud />
    <div className='background-box'>
      <div className='grid-1-col container'>
        {
          projects.map((project, index) => <ProjectCard key={index} project={project} />)
        }
      </div>
    </div>
  </>
}
export const getStaticProps = async () => {
  const resProjects = await fetch(process.env.STRAPI_BACKEND_URL + '/api/projects?populate=*')
  const projects = await resProjects.json()

  return {
    props: {
      projects: projects.data,
    }
  }
}
