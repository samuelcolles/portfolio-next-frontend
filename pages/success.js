import React from 'react'
import Style from '../styles/success.module.scss'

const success = () => {
    return <div className="background-box">
        <div className={Style.root + " container"}>
            <p>Thank you for taking the time to contact me! I will get back to you as soon as possible.</p>
        </div>
    </div>

}

export default success