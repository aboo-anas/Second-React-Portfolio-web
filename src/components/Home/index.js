import './index.scss'
import logoTitle from '../../assets/images/logoM.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['u', 'h', 'a', 'm', 'm', 'a', 'd']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.',]

    useEffect (() => {
        setTimeout(() => {
            setLetterClass ('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={logoTitle} alt='developer' />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} indx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} indx={22}/>
                </h1>
                <h2>Frontend Developer / JavaScript Expert / Python Expert</h2>
                <Link to='/contact' className='flat-button'>HIRE ME</Link>
            </div>
        </div>
    )
}

export default Home