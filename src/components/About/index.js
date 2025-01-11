import { useEffect, useState } from 'react'
import CLogo from '../../assets/images/C++Icon.png'
import {
  faPython,
  faJsSquare,
  faReact,
  faJava,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm an ambitious Software Engineer looking for work as a Software Developer
            in a tech company, primarily an internship, in order to challenge myself more and
            get to learn more diverse and state-of-the-art technologies.
          </p>
          <p align="LEFT">
            I'm quite outgoing, curious, mostly hard working, and always try my best 
            at everything I do to achieve the best results so that when I look back,
            I would not regret anything I do.
          </p>
          <p>
            I'm quite efficient at Object Oriented Programming and one of my favorite programming
            languages is C++. I've had more than 4 years of experiences with programming in general.
            If you wish to know more about my technical skill, below is my attached Resume.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <img src = {CLogo} alt = "C++ Logo" width = {200} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} color="#000000" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faDatabase} color="#00758f" />
            </div>
          
          </div>
      </div>
      <a style={{display: "table-cell"}} href = "https://drive.google.com/file/d/1hcfq4R6R-EjPSyIIP5CPvWxMUGeLP-Dc/view" target = "_blank" 
rel = "noopener noreferrer" className = 'button'>MY RESUME</a>
      </div>
      
      <Loader type="pacman" />
    </>
  )
}

export default About