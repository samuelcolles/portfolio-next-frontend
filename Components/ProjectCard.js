import React from 'react'
import Style from '../styles/projectCard.module.scss'
import Image from 'next/image'
import { marked } from 'marked'

const ProjectCard = ({ project }) => {
    const { title, desc, githubURL, demoURL, codeDemoImage, siteDemoImage } = project.attributes
    const siteImageURL = process.env.STRAPI_BACKEND_URL + siteDemoImage.data.attributes.url
    const codeImageURL = process.env.STRAPI_BACKEND_URL + codeDemoImage.data.attributes.url

    return <div className={Style.root}>
        <div className={Style.infoBox}>
            <h1 className={Style.title}>{title}</h1>
            <div className={Style.description} dangerouslySetInnerHTML={{ __html: marked(desc) }} />
        </div>
        <div className={Style.previewStack} >
            <a href={githubURL} className={Style.preview}>
                <Image className={Style.previewImage} src={siteImageURL} height={200} width={200} />
                <p className={Style.previewText}>Demo</p>
            </a>
            <a href={demoURL} className={Style.preview} >
                <Image className={Style.previewImage} src={codeImageURL} height={200} width={200} />
                <p className={Style.previewText}>Code</p>
            </a>
        </div>
    </div>
}

export default ProjectCard