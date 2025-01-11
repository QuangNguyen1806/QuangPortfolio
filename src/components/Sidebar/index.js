import './index.scss'
import Quang_logo from '../../assets/images/Quang_logo.png'
import logo_sub from '../../assets/images/logo_sub.png'
import {
    faHome,
    faUser,
    faEnvelope,
  } from '@fortawesome/free-solid-svg-icons'
  import { Link, NavLink } from 'react-router-dom'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className = 'Logo' to= '/'>
            <img src = {Quang_logo} alt = 'logo' />
            <img src = {logo_sub} className='sub_logo' alt = 'sub_logo' />
        </Link>

        <nav>
            <NavLink extract = 'true' activeclassname = "active" to = '/'>
                <FontAwesomeIcon icon = {faHome} color = '#4d4d4e' />
            </NavLink>
            <NavLink extract = 'true' activeclassname = "active" classname = 'about-link' to = '/about'>
                <FontAwesomeIcon icon = {faUser} color = '#4d4d4e' />
            </NavLink>
            <NavLink extract = 'true' activeclassname = "contact-link" to = '/contact'>
                <FontAwesomeIcon icon = {faEnvelope} color = '#4d4d4e' />
            </NavLink>
        </nav>
<ul>
    <li>
        <a target = '_blank' rel='noreferer' href =  'https://www.linkedin.com/in/quangnguyen1806/'>
            <FontAwesomeIcon icon = {faLinkedinIn} color = '#0077B5' />
        </a>
    </li>
    <li>
        <a target = '_blank' rel='noreferer' href =  'https://github.com/QuangNguyen1806'>
            <FontAwesomeIcon icon = {faGithub} color = '#4d4d4e' />
        </a>
    </li>
</ul>
    </div>
)

export default Sidebar