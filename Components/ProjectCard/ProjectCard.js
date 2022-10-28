import React from "react";
import Style from "./projectCard.module.scss";
import Image from "next/image";
import { marked } from "marked";

const ProjectCard = ({ project }) => {
  const { title, desc, githubURL, demoURL, codeDemoImage, siteDemoImage } =
    project.attributes;
  const siteImageURL =
    siteDemoImage.data === null ? "" : siteDemoImage.data.attributes.url;
  const codeImageURL =
    codeDemoImage.data === null ? "" : codeDemoImage.data.attributes.url;

  return (
    <div className={Style.root}>
      <div className={Style.infoBox}>
        <h1 className={Style.title}>{title}</h1>
        <div
          className={Style.description}
          dangerouslySetInnerHTML={{ __html: marked(desc) }}
        />
      </div>
      <div className={Style.previewStack}>
        {siteImageURL === "" ? (
          <></>
        ) : (
          <a href={demoURL} className={Style.preview}>
            <Image
              className={Style.previewImage}
              src={siteImageURL}
              height={200}
              width={200}
              priority
            />
            <h3 className={Style.previewText}>Demo</h3>
          </a>
        )}

        {codeImageURL === "" ? (
          <></>
        ) : (
          <a href={githubURL} className={Style.preview}>
            <Image
              className={Style.previewImage}
              src={codeImageURL}
              height={200}
              width={200}
              priority
            />
            <h3 className={Style.previewText}>Code</h3>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
