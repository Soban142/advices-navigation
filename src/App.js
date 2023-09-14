import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  let [ adviceCount, setAdviceCount] = useState(0);  
  let [ advice, setAdvice] = useState(['Frontend framework!, Click next to see more....', 'Step 1: Learn React', 'Step 2: Earn profitable money', 'Step 3: Invest money and live a happy life']);  

  

  function nextHandler() {
    console.log(adviceCount)
    if(adviceCount <= 2){
      setAdviceCount((c) =>  c + 1)
    }
    console.log(adviceCount)
  }

  function previousHandler() {
    console.log(adviceCount)
    if(adviceCount > 0){
      setAdviceCount((c) =>  c - 1)
    }
  }

  return (

    <div className='App'>
      <div className="navigation">
        {Array.from([1, 2, 3], (x) => <div className='navigators' style={{backgroundColor: x <= adviceCount ? 'blue' : 'gray'}}>{x}</div>)}
      </div>
      <div className='content'>{advice[adviceCount]}</div>
      <div className='buttonContainer'>
        <button className='nextBtn btn' onClick={nextHandler}>Next</button>
        <button className='prevBtn btn' onClick={previousHandler}>Previous</button>
      </div>
    </div>
  );
}

export default App;
