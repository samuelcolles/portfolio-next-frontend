import React from 'react'
import Style from './backgroundClouds.module.scss'

const BackgroundClouds = () => {
  return (
    <div className={Style.root}>
        <img className={Style.cloud + " " + Style.cloud1} src="/clouds/SmallCloud1.svg" />
        <img className={Style.cloud + " " + Style.cloud2} src="/clouds/SmallCloud2.svg" />
        <img className={Style.cloud + " " + Style.cloud3} src="/clouds/MediumCloud2.svg" />
        <img className={Style.cloud + " " + Style.cloud4} src="/clouds/MediumCloud1.svg" />
        <img className={Style.cloud + " " + Style.cloud5} src="/clouds/MediumCloud2.svg" />
        <img className={Style.cloud + " " + Style.cloud6} src="/clouds/LargeCloud1.svg" />
        {/* <img className={Style.cloud + " " + Style.cloud7} src="/clouds/SmallCloud1.svg" />
        <img className={Style.cloud + " " + Style.cloud8} src="/clouds/SmallCloud1.svg" /> */}
    </div>
  )
}
export default BackgroundClouds