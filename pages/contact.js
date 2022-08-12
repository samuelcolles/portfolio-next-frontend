import React, { useState } from "react"
import CorrespondenceBox from "../Components/CorrespondenceBox"
import style from '../styles/contact.module.scss'
export const Contact = () => (
    <div className=" background-box background-sky-2">
        <div className="container grid-1-col">
            <div className={style.note + " background-color-a-very-light"}>

                <p>Feel free to contact me at <a href="mailto:samueltaziocolles@hotmail.com">samueltaziocolles@hotmail.com</a> or use the contact sheet below.</p>
                <p>*References are Available upon request.</p>
            </div>
            <CorrespondenceBox />
        </div>
    </div>
)

export default Contact