import React from 'react'
import './platform.css'
import Move from '../../../assets/office.jpg'
import Revenue from '../../../assets/revenue.jfif'
import Truth from '../../../assets/truth.jfif'

function Platform() {
  return (
    <div className='platForm'>
        <div>
            <h1 className='plat'>The platform for modern</h1>
            <select name="" id="" className='platformSelect'>
              <option value="">marketting terms</option>
              <option value="">Marketting terms</option>
              <option value="">Design terms</option>
              <option value="">Engineering term</option>
              <option value="">Agencies</option>
            </select>
            <p className="platformPara">Webflow Enterprise gives marketing teams the flexibility, security, and reliability they need to scale innovative web experiences that drive growth in the age of AI.</p>
        </div>
        <div className='platformCards'>
            <div className="move">
              <img src={Move} alt="" className='motionBlur cardImg'/>
              <h1 className="platcardHead">Move quickly without sacrificing quality or process</h1>
              <p className="platcardPara">Launch on-brand experiences fast. Webflow Enterprise delivers the marketing speed you need with the precision you demand. Built-in guardrails protect quality, while structured processes ensure speed without added risk.</p>
            </div>
            <div className="traffic">
              <img src={Revenue} alt="" className='trafficImg cardImg'/>
              <h1 className="platcardHead">Turn traffic into revenue</h1>
              <p className="platcardPara">Launch sophisticated web experiments seamlessly with native, AI-powered optimization tools. Webflow Enterprise helps ensure your digital experiences are both SEO/AEO-friendly and optimized for conversion — so you can drive real business results.</p>
            </div>
            <div className="overHead">
              <img src={Truth} alt="" className="overHeadImg cardImg" />
              <h1 className="platcardHead">Reduce overhead with a single source of truth</h1>
              <p className="platcardPara">Collaborate more effectively by uniting creative, marketing, and dev teams in one platform. With Webflow Enterprise, every team can move faster, together — making scalable web experiences possible and reducing the total cost of ownership.</p>
            </div>
        </div>
    </div>
  )
}

export default Platform