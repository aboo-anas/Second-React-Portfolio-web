import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3, faHtml5, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect (() => {
        setTimeout(() => {
            setLetterClass ('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        indx={15}
                    />
                </h1>
                <p>I'm very ambitious front-end developer looking for a role in established IT company with the opportunity to work with the latest technologies and diverse projects.</p>
                <p>I'm quietly confident, naturally curious and perpetually working on improving my chops one design at a time.</p>
                <p>If I need to define myself in one sentence that would be a family person, father of gifted children, practicing Muslim, Taekwondo enthusiast and tech-obsessed!!!</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#00b38f' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color='#3366ff' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color='#e62e00' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#e6b800' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPython} color='#336699' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color='#00b359' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About
