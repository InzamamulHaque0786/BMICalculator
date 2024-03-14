import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home-container  calculator-body'>
        <div className="home-mode">
            mode
        </div>
        <div className="home-intro">
            <p>Welcome</p>
            <p>BMI Calculator</p>
        </div>
        <div className="male-female-btn">
            <div className="male-btn">
                Male
            </div>
            <div className="female-btn">
                Female
            </div>
        </div>
        <div className='home-btns'>
            <div className="home-btns-heights">
                height
            </div>
            <div className="home-btns-right">
                <div className="home-btn-weight">
                    Weight
                </div>
                <div className="home-btn-age">
                    Age
                </div>
            </div>
        </div>
        <div className="home-result-btn">
            Lets's go
        </div>
    </div>
  )
}

export default Home