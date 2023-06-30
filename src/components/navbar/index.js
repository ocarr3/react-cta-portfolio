import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoHome from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faHandshake, faTrain} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
const Navbar = () => (
    <div className='nav-bar'>
        <Link className='logo' to ='=/'>
            <img src={LogoHome}/>
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname= "active" to= "/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                <div className="nav-text">Home</div>
            </NavLink>
            <NavLink exact = "true" activeclassname= "active" className= "about-link" to= "/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                <div className="nav-text">About</div>
            </NavLink>
            <NavLink exact = "true" activeclassname= "active" className= "about-link" to= "/project">
                <FontAwesomeIcon icon={faTrain} color="#4d4d4e"/>
                <div className="nav-text">Project</div>
            </NavLink>
            <NavLink exact = "true" activeclassname= "active" className= "contact-link" to= "/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                <div className="nav-text">Contact</div>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel = "noreferrer" href='https://www.linkedin.com/notifications/?filter=all'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target = "_blank" rel = "noreferrer" href='https://github.com/ocarr3st'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target = "_blank" rel = "noreferrer" href='https://www.linkedin.com/notifications/?filter=all'>
                    <FontAwesomeIcon icon={faHandshake} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)

export default Navbar