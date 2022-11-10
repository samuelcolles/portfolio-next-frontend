import React, { useState } from "react"
import BackgroundClouds from "../Components/BackgroundClouds/BackgroundClouds"
import CorrespondenceBox from "../Components/Contact/CorrespondenceBox"
import ContactNote from "../Components/Contact/ContactNote"

export const Contact = () => (
    <div className="background-box">
        <div className="container flex-column">
            <ContactNote />
            <CorrespondenceBox />
        </div>
    </div>
)

export default Contact