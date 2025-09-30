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
          <input type="text" placeholder='Enter your email' />
        </div>
        <div className="inp">
          <label htmlFor="bussinessLabel" className="formLabel clr">Business email*</label>
          <select name="" id=""></select>
        </div>
        <div className="inp">
          <label htmlFor="bussinessLabel" className="formLabel clr">Business email*</label>
          <select name="" id=""></select>
        </div>
        <div className="inp">
          <label htmlFor="bussinessLabel" className="formLabel clr">Business email*</label>
          <input type="text" placeholder='Enter your email' />
        </div>
        <div className="inp">
          <label htmlFor="bussinessLabel" className="formLabel clr">Business email*</label>
          <input type="text" placeholder='Enter your email' />
        </div>
        <div className="inp">
          <label htmlFor="bussinessLabel" className="formLabel clr">Business email*</label>
          <input type="text" placeholder='Enter your email' />
        </div>
        <div className="inp">
          <label htmlFor="bussinessLabel" className="formLabel clr">Business email*</label>
          <input type="text" placeholder='Enter your email' />
        </div>
        <div className="inp">
          <label htmlFor="bussinessLabel" className="formLabel clr">Business email*</label>
          <input type="text" placeholder='Enter your email' />
        </div>
        <div className="inp">
          <label htmlFor="bussinessLabel" className="formLabel clr">Business email*</label>
          <input type="text" placeholder='Enter your email' />
        </div>
        <p className="formPara clr">By submitting this form, you agree to Webflow’s <a href="" className='clr'>Terms of Service</a> and <a href="" className='clr'>Privacy Policy.</a></p>
      </form>
    </div>
  )
}

export default Herosection