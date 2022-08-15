import React from 'react'
import Image from 'next/image'
import Style from '../../styles/projectCloud.module.scss'
const ProjectCloud = ({ project }) => {
  const { title, desc, githubURL, demoURL, codeDemoImage, siteDemoImage  } = project.attributes
  const siteImageURL = 'http:/localhost:1337' + siteDemoImage.data.attributes.url

  return <div className={Style.root}>
    <div className={Style.cloudContainer}>
      <img src="/clouds/BigCloud1.svg" className={Style.cloudImage} />
      <div className={Style.preview}>
        <Image className={Style.previewImage} src={siteImageURL} width={200} height={200}/>
        <div className={Style.linkShelf}>
          <a href={demoURL} className={Style.previewText}>Demo</a>
          <a href={githubURL} className={Style.previewText}>Code</a>
        </div>

        
      </div>
    </div>
    <div className={Style.descCloudContainer} >
      <img src="/clouds/WideCloud1.svg" className={Style.cloudImage} />
      <div className={Style.description}>
        <h1 className={Style.description_title}>{title}</h1>
        <p className={Style.description_text}>{desc}</p>
      </div>
    </div>
  </div >
}

export default ProjectCloud