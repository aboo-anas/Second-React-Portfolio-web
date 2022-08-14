import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import mylogo from '../../assets/images/logoM.png'
import mysublogo from '../../assets/images/sublogo3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => (

    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={mylogo} alt='Logo'/>
            <img className='sublogo' src={mysublogo} alt='Logo'/>
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'></NavLink>
        </nav>

    </div>
)

export default Sidebar