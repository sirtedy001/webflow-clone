import React from 'react'
import './partner.CSS'

function Partner() {
  return (
    <div className='main-card'>
        <div className="cardHead">
            <h1 className="power same">A platform that powers growth.</h1>
            <h1 className="support same">A partner that supports it.</h1>
            <p className="cardParaH">From implementation support to in-the-moment troubleshooting, we're here to help you build, scale, and optimize your digital experiences.</p>
        </div>
        <div className="cards">
            <div className="cardPartner">
                <i></i>
                <h2 className="cardHead2">24/7 tailored customer service</h2>
                <p className="cardPara">Get 24/7 support from a team that understands your needs. Work through any problem with help from a real person, at any time.</p>
            </div>
            <div className="cardPartner">
                <i></i>
                <h2 className="cardHead2">A dedicated customer success manager </h2>
                <p className="cardPara">Work with a dedicated customer success manager to meet your business goals and maximize your investment in Webflow Enterprise.</p>
            </div>
            <div className="cardPartner">
                <i></i>
                <h2 className="cardHead2">Solutions architects</h2>
                <p className="cardPara">Consult with a solutions architect to streamline your implementation and get guidance and expertise to scale your use of Webflow Enterprise.</p>
            </div>
        </div>
    </div>
  )
}

export default Partner