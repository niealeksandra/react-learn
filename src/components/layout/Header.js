import { Link, useLocation } from "react-router-dom";
import classes from './Header.module.css'


const Header = () => {

    const location = useLocation()

    return (
        <header className={classes.header}>
            <h1>React App</h1>
            <ul>
                <li>
                    <Link to='/' className={`${location.pathname =='/' ? 'active' : ''}`}>Users</Link>
                </li>
                <li>
                    <Link to='/todos' className={`${location.pathname =='/todos' ? 'active' : ''}`}>Todos</Link>
                </li>
            </ul>
        </header>
    )
  }

  
  export default Header