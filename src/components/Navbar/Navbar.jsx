import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logoInsta from '../../img/insta.png'
import shop from '../../img/shop.png'
import user from '../../img/user.png'

function Navbar() {
  return (
    <div className='navbar'>
        <nav className='tabs-navbar'>
            <ul className='tabs'>
                <li className='tab'>SHOP</li>
                <Link className='tab' to="/subscribe">SUBSCRIBE</Link>
                <li className='tab'>ABOUT</li>
                <Link className='tab' to="/sustainability">SUSTAINABILITY</Link>
            </ul>
        </nav>
        <Link to='/' className='title-navbar'>EDMUNDS</Link>
        <div className='icons-list'>
            <img src={logoInsta} alt="instagram" />
            <img src={user} alt="profil" />
            <img src={shop} alt="panier" />
        </div>
    </div>
  )
}

export default Navbar