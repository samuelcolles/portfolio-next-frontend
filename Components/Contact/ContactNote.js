import React from 'react'
import Style from './contactNote.module.scss'

const ContactNote = () => {
    return <div className={Style.root}>
        <p>Feel free to contact me at <a href="mailto:samueltaziocolles@hotmail.com">samueltaziocolles@hotmail.com</a> or use the contact sheet below.</p>
        <p>*References are Available upon request.</p>
    </div>
}

export default ContactNote