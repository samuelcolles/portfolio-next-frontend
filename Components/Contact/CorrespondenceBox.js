import React, { useState } from "react";
import { CorrespondenceAPIService } from "../../services/correspondenceAPI";
import style from './correspondenceBox.module.scss'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import slideUp from "../../animations/slideUp"

export default function CorrespondenceBox() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const router = useRouter()

    const [sending, setSending] = useState(false)


    const handleSend = async (event) => {
        event.preventDefault();
        //errors are reset before checking so that fixed errors do no persist
        setNameError(false)
        setEmailError(false)
        setMessageError(false)
        var passed = true
        if (name === "") {
            passed = false
            setNameError(true)
        }
        if (email === "") {
            passed = false
            setEmailError(true)
        }
        if (message === "") {
            passed = false
            setMessageError(true)
        }
        if (passed) {
            setSending(true)
            await CorrespondenceAPIService.create({
                data: {
                    name: name,
                    email: email,
                    message: message
                }
            });
            console.log("Request sent")
            router.push("/success")
        }
    }

    return <>
        <motion.div
            className={"background-color-a-very-light container " + style.main}
            initial="hidden"
            variants={slideUp}
            whileInView="visible"
            viewport={{ once: true }}
        >
            <form className={style.form} onSubmit={(e) => handleSend(e)}>
                <div className={style.fieldAndError}>
                    <label htmlFor="name">Name:</label>
                    {nameError ? <p>Please include your name.</p> : <></>}
                </div>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <div className={style.fieldAndError}>
                    <label htmlFor="email">Email:</label>
                    {emailError ? <p>Please include a valid email address.</p> : <></>}
                </div>
                <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className={style.fieldAndError}>
                    <label htmlFor="message">Message:</label>
                    {messageError ? <p>Please include a message.</p> : <></>}
                </div>
                <textarea
                    rows="5"
                    cols="40"
                    id="message"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button onClick={(e) => handleSend(e)}>Send</button>
            </form>
        </motion.div>

        <div className={"background-color-a-very-light container " + style.main}>
            <form className={style.form} onSubmit={(e) => handleSend(e)}>
                <div className={style.fieldAndError}>
                    <label htmlFor="name">Name:</label>
                    {nameError ? <p>Please include your name.</p> : <></>}
                </div>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <div className={style.fieldAndError}>
                    <label htmlFor="email">Email:</label>
                    {emailError ? <p>Please include a valid email address.</p> : <></>}
                </div>
                <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className={style.fieldAndError}>
                    <label htmlFor="message">Message:</label>
                    {messageError ? <p>Please include a message.</p> : <></>}
                </div>
                <textarea
                    rows="5"
                    cols="40"
                    id="message"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                {sending ? <></> :
                    <button disabled={sending} onClick={(e) => handleSend(e)}>Send</button>
                }


            </form>
        </div>

        {
            sending ?
                <div className={"background-color-a-very-light container " + style.sending}>
                    <h1>Sending...</h1>
                    <p>Please wait a moment</p>
                </div>
                : <></>
        }
    </>
}