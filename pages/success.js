import React from 'react'
import Style from '../styles/success.module.scss'

const success = () => {
    return <div className={Style.root + " background-box"}>
        <div className={Style.box + " container"}>
            <h1>Thank you!</h1>
            <p>Thank you for taking the time to contact me! I will get back to you as soon as possible.</p>
        </div>
    </div>

}

export default success