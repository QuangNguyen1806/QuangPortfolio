import { Link } from 'react-router-dom'
import './index.scss'
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import Quang_logo from '../../assets/images/Quang_logo_NB.png'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'Q', 'u', 'a', 'n', 'g', ' ', 'N', 'g', 'u', 'y', 'e', 'n', ',']
    const jobArray = ['S','o','f','t', 'w', 'a', 'r', 'e',' ' , 'E', 'n', 'g','i','n','e','e','r', '.']


    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 5500)
      }, [])

    return (
      <>
        <div className="container home-page">
            <div className = "text-zone">
                <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _16`}>m</span>
                 <AnimatedLetters letterClass = {letterClass}
                strArray={nameArray} idx = {17} /> 
                <br /> 
                <AnimatedLetters letterClass = {letterClass}
                strArray={jobArray} idx = {31} />

                </h1>
                <h2> FrontEnd Developer / Backend Developer</h2>
                <Link to='/contact' className = "flat-button"> CONTACT ME </Link >
            </div>
            <img
        className="solid-logo"
        src={Quang_logo}
        opacityTransition = {1000}
      />
            </div>
            <Loader type = "pacman" />
            </>
          
    );
}

export default Home