import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Loader} from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'O', 'm', 'a', 'r','.']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])


    return (
        <>
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>
                <span className = {letterClass}>H</span>
                <span className = {`${letterClass} _12`}>i,</span>
                <br />
                <span className = {`${letterClass} _13`}>I</span>
                <span className = {`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass = {letterClass} strArray = {nameArray} idx = {15} />
                <br />
                <AnimatedLetters letterClass = {letterClass} strArray = {jobArray} idx = {19} />
                </h1>
                <h2>React / JavaScript / Java / Python</h2>
                <h2>Univesity of Illinois Chicago - BS in Engineering, Major in Computer Science</h2>
                <Link to = "/contact" className = "flat-button">CONTACT ME</Link>
            </div>
        </div>
        <Loader type = "pacman"/>
        </>
    );
    
}

export default Home 