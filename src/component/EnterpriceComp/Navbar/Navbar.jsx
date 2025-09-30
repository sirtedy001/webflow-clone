import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='head-nav'>
        <h1 className='pageHead'>Webinar: Dermalogica's formula for a scalable website testing program - Register now↗</h1>
        <nav className='navGuard'>
            <ul className='navs'>
                <li className='logo'>
                    <a href="#">Webflow</a>
                </li>
                <li>
                    <a href="#" className='navHover'>Platform</a>
                </li>
                <li>
                    <a href="#" className='navHover'>Solution</a>
                </li>
                <li>
                    <a href="#" className='navHover'>Resources</a>
                </li>
                <li>
                    <a href="#" className='navHover'>Enterprice</a>
                </li>
                <li>
                    <a href="#" className='navHover'>Pricing</a>
                </li>
                <li className='login'>
                    <a href="#" className='navHover'>Log in</a>
                </li>
                <li>
                    <a href="#" className='navHover'>Contact Sales</a>
                </li>
                <button className='startBtn'>
                    <a href="#">Get Started</a>
                </button>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar