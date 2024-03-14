import React ,{useState} from 'react'
import Home from './components/Home'
import Result from './components/Result'

const App = () => {
  const[mode,toggleMode]=useState(false);
  return (
    <div className='app-container'>
      <Home mode={mode} toggleMode={toggleMode}/>
      <Result mode={mode} toggleMode={toggleMode}/>
    </div>
  )
}

export default App
