import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"
import {Loader} from "react-loaders";
import {useState, useEffect, useRef, refForm, form} from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef() 
    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_1ng6efw',
                'template_rsckoso',
                refForm.current,
                'umQDAGY6lQBNEyoZ7'
            )
            .then (
                () => {
                    alert('Message succesfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )
    }

    return (
        <>
            <div className = "container contact-page">
                <div className = "text-zone">
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n','t', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in oppurtunities to gain experience in many different environments. Attached on this page is access to my resume and you can find my LinkedIn and Handshake at the top right.
                        <br/> <br/>
                        If you believe I am a good fit for anything please feel free to reach out using the form below.
                    </p>
                    <div className="contact-form">
                        <form ref = {refForm} onSubmit = {sendEmail}>
                            <ul>
                                <li className = "half">
                                    <input type = "text" name = "name" placeholder = "Name" required/>
                                </li>
                                <li className = "half">
                                    <input type = "email" name = "email" placeholder = "Email" required/>
                                </li>
                                <li>
                                    <input type = "text" name = "subject" placeholder = "Subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder = "Message" name = "message" required/>
                                </li>
                                <li>
                                    <input type = "submit" className = "flat-button" value = "SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                    
                </div>
            </div>
            <Loader type = "pacman"/>
        </>
    )
}

export default Contact 