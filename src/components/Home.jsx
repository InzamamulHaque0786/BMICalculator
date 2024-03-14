import React from 'react'
import { LuMoon, LuSun } from "react-icons/lu";
import { IoMale ,IoFemale } from "react-icons/io5";
import './Home.css'
const Home = ({mode,toggleMode}) => {
  const setLight=()=>{
    toggleMode(false);
  }
  const setDark=()=>{
    toggleMode(true);
  }

  return (
    <div className='home-container  calculator-body' data-theme={`${mode?'dark':"light"}`}>
        <div className="home-mode">
        <LuSun onClick={setLight} className={`${mode?'home-mode-icon':'home-mode-icon-active'}`} />
        <LuMoon onClick={setDark} className={`${!mode?'home-mode-icon':'home-mode-icon-active'}`} />
        </div>
        <div className="home-intro">
            <p>Welcome</p>
            <p>BMI Calculator</p>
        </div>
        <div className="male-female-btn">
            <div className="male-btn  btn-active">
            <IoMale /> Male
            </div>
            <div className="female-btn ">
            <IoFemale /> Female
            </div>
        </div>
        <div className='home-btns'>
            <div className="home-btns-heights">
                
                <p>Height</p>
                <div className="height-controles">
                <div className="height-bar">
                    <div className="height-bar-progress"/>
                </div>
                <div className="height-scale">
                    <div className='height-scale-elements'><span></span>190</div>
                    <div className='height-scale-elements'><span></span>180</div>
                    <div className='height-scale-elements'><span></span>170</div>
                    <div className='height-scale-elements'><span></span>160</div>
                    <div className='height-scale-elements'><span></span>150</div>
                    <div className='height-scale-elements'><span></span>140</div>
                    <div className='height-scale-elements'><span></span>130</div>
                    <div className='height-scale-elements'><span></span>120</div>
                    <div className='height-scale-elements'><span></span>110</div>
                    <div className='height-scale-elements'><span></span>100</div>
                    
                </div>
                </div>
            </div>
            <div className="home-btns-right">
                <div className="home-btn-weight">
                    <p>Weight</p>
                    <p>70</p>
                    <div className="home-btn-smbtn">
                        <div className="minus">-</div>
                        <div className="plus">+</div>
                    </div>
                </div>
                <div className="home-btn-age">
                    <p>Age</p>
                    <p>23</p>
                    <div className="home-btn-smbtn">
                        <div className="minus">-</div>
                        <div className="plus">+</div>
                    </div>
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