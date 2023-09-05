import React from 'react'
import Logo from './Images/Group 10.png'

function Navbar(){
    return(
        <>
        <div className="nav-cont">
        <nav>
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="nav-btn">
                <a href="./">Home</a>
                <a href="./">About Us</a>
                <a href="./">Connect</a>
            </div>
        </nav>
        <hr/>
    </div>
        </>

);

}

export default Navbar