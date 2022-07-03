import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from '../StateProvider';



function Header() {
    const [{basket}] = useStateValue();

    return (
        <nav className='header'>
            <Link to='/'>
                <div className="img__container">
                    <img  
                    className="header__logo"
                    src='/logo.png'
                    />
                </div>
            </Link>
            <h2 className='header__text'>Grandma's Meal</h2>
            <Link to='/checkout' style={{textDecoration: 'none'}}>
                <div className="header__checkout">
                    <ShoppingCartIcon className='icon' fontSize="large"/>
                    <span>{basket.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header

