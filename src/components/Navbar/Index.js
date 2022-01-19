import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <div className='navbar'>
            <Link to="/">
                <img 
                className="navbar__logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNipP28JG7dY_rPo0C8Ua_HMS8DWd6pcIubVeEk3P3Akp8hKEGZkDQRCpdugLsOBwJ_is&usqp=CAU"
                alt=""
                 />
            </Link>
            <div className='navbar__items'>
                <div className='navbar__option'>
                    <span className='navbar__option0'>Home</span>
                </div>
                <div className='navbar__option'>
                    <span className='navbar__option1'>About</span>
                </div>
                <div className='navbar__option'>
                    <span className='navbar__option2'>Courses</span>
                </div>
                <div className='navbar__option'>
                    <span className='navbar__option3'>Blogs</span>
                </div>
                <div className='navbar__option'>
                    <span className='navbar__option4'>Contact</span>
                </div>


            </div>
            
        </div>
    )
}

export default Navbar

