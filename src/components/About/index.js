import './index.scss'

import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect } from 'react'
import {Loader} from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
        <div className = 'container about-page'>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray = {['A','b','o','u','t',' ','m','e']}
                        idx = {15}
                    />
                </h1>
                <p>
                    I'm a passionate and driven software engineer eager to kickstart my career in the industry. As a recent graduate with a solid foundation in relevant languages and frameworks, I am excited to apply my skills and contribute to innovative projects.
                
                <p>
                    During my time in college, I had the opportunity to work on various hands-on projects, both individually and collaboratively, which provided me with valuable experience in problem-solving, code optimization, and the software development lifecycle.
                    I believe in the power of collaboration and effective communication to foster a positive and productive work environment. I am always eager to learn from my peers and actively contribute to a team's success.</p>
                <p>
                I am an eager learner that loves to see their work come to life that and enjoys the problem-solving aspect of projects. If there is an idea for a feature or product I'm ready to dive head first into getting towards that goal, whether it be with the skills that I already have or ready to learn the skills that would take me there.
                </p>    
                   As a big fan of sports I'm a big supporter of German club FC Bayern and always looking to support Mexico's national team in soccer. Recently I've become interested in the NFL and I am excited to see where the Chicago Bears end up as they continiously improve.
                </p>
            </div>

            <div className = 'stage-cube-cont'>
                <div className = 'cubespinner'>
                    <div className = 'face1'>
                      <FontAwesomeIcon icon = {faJava} color = "#5382A1 " />
                    </div>
                    <div className = 'face2'>
                        <FontAwesomeIcon icon = {faCss3} color = "#28A4D9" />
                    </div>
                    <div className = 'face3'>
                        <FontAwesomeIcon icon = {faHtml5} color = "#FFA500" />
                    </div>
                    <div className = 'face4'>
                        <FontAwesomeIcon icon = {faJsSquare} color = "#EFD81D" />
                    </div>
                    <div className = 'face5'>
                        <FontAwesomeIcon icon = {faPython} color = "#FFD343" />
                    </div>
                    <div className = 'face6'>
                        <FontAwesomeIcon icon = {faReact} color = "#5ED4F4" />
                        
                    </div>
                </div>
            </div>
        </div>
        <Loader type = "pacman"/>
        </>
    )
}

export default About