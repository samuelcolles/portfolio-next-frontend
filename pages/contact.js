import React, { useState } from "react"
import CorrespondenceBox from "../Components/CorrespondenceBox"
import BackgroundClouds from "../Components/BackgroundClouds"
import style from '../styles/contact.module.scss'
export const Contact = () => (<>
<BackgroundClouds/>
    <div className="background-box">
        
        <div className="container flex-column">
            <div className={style.note + " background-color-a-very-light"}>

                <p>Feel free to contact me at <a href="mailto:samueltaziocolles@hotmail.com">samueltaziocolles@hotmail.com</a> or use the contact sheet below.</p>
                <p>*References are Available upon request.</p>
            </div>
            <CorrespondenceBox />
        </div>
    </div>
</>
)

export default Contact