import React from 'react'
import './herosection.css'
import HeroImg from '../../../assets/hero.jpeg'

function Herosection() {
  return (
    <div className='herosec'>

      <div className="textArea">
        <p className="title">Webflow Enterprice</p>
        <h1 className="heroMain clr">Enterprice scale, unmatched impact</h1>
        <p className="heroPara clr">Turn your brand's creative vision into dynamic web experiences that drive real results with an AI-native platform that scales across your entire organization.</p>
        <div className='heroimg'><img src={HeroImg} alt="" /></div>
      </div>

      <form action="" className='form'>

        <label htmlFor="formTitle" className=' clr'>Contact sales</label>

        <div className="inp">
          <label htmlFor="bussinessLabel" className="formLabel clr">Business email*</label>
          <input type="text" placeholder='Enter your email' className="formInp"/>
        </div>

        <div className="inp">
          <label htmlFor="companySize" className="formLabel clr">Company Size*</label>
          <select name="" id="" className="formSelect"></select>
        </div>

        <div className="inp">
          <label htmlFor="support" className="formLabel clr">How can we support you?*</label>
          <select name="" id="" className="formSelect"></select>
        </div>

        <div className="inp">
          <label htmlFor="firstName" className="formLabel clr">First name*</label>
          <input type="text" placeholder='Enter your first name' className="formInp"/>
        </div>

        <div className="inp">
          <label htmlFor="lastName" className="formLabel clr">Last name*</label>
          <input type="text" placeholder='Enter your last name' className="formInp"/>
        </div>

        <div className="inp">
          <label htmlFor="company" className="formLabel clr">Company*</label>
          <input type="text" placeholder='where do you work?' className="formInp"/>
        </div>

        <div className="inp">
          <label htmlFor="title" className="formLabel clr">Title*</label>
          <input type="text" placeholder='What is your job title?' className="formInp"/>
        </div>

        <div className="inp">
          <label htmlFor="country" className="formLabel clr">Country*</label>
          <select name="country" id="" className="formSelect"></select>
        </div>

        <div className="inp">
          <label htmlFor="phoneNumber" className="formLabel clr">Phone Number*</label>
          <input type="text" placeholder='Enter your phone number' className="formInp"/>
          <input type="button" value="Talk to us" className='formButton'/>
        </div>

        <p className="formPara clr">By submitting this form, you agree to Webflow's <a href="" className='clr'>Terms of Service</a> and <a href="" className='clr'>Privacy Policy.</a></p>

      </form>
    </div>
  )
}

export default Herosection