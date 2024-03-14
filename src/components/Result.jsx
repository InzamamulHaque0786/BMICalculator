import React from 'react'
import './Result.css'
import { Line, Circle } from 'rc-progress';
const Result = () => {
  return (
    <div className='result-container calculator-body'>
      <div id="back-btn">Back</div>
      <div>Your BMI is</div>
      <div className="bmi-indicator">
      <Circle id='bmi-indicator-comp' percent={90} strokeWidth={10} trailWidth={10} 
      strokeColor="#246AFE" trailColor="#ffff"/>
      <p>20.4</p>
      </div>
      <p>Underweight</p>
      <div className="result-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque odio
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque odio 
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque odio 
      </div>
      <div className="result-more-btn">
        Find Out More
      </div>
    </div>
  )
}

export default Result