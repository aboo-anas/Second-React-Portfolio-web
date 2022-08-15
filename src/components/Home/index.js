import './index.scss'
import logoTitle from '../../assets/images/logoM.png'
import { Link } from 'react-router-dom'


const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    Hi, <br/>I'm
                <img src={logoTitle} alt='developer' />
                uhammad
                <br/>
                web developer
                </h1>
                <h2>Frontend developer / Javascrip Expert / Python Expert</h2>
                <Link to='/contact' className='flat-button'>HIRE ME</Link>
            </div>
        </div>
    )
}

export default Home