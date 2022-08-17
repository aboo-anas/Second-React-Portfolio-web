import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect (() => {
        setTimeout(() => {
            setLetterClass ('text-animate-hover')
        }, 3000)
    }, [])


    return (
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
        </div>
    )
}

export default About