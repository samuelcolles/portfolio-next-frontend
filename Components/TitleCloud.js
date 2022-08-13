import React from 'react'
import Style from '../styles/titleCloud.module.scss'

const TitleCloud = () => {
    return <div className={Style.root}>

            <img className={Style.cloud + " " + Style.cloud1} src="/clouds/WebCloud1.svg" />
            <img className={Style.cloud + " " + Style.cloud2} src="/clouds/WebCloud2.svg" />
    </div>
}

export default TitleCloud