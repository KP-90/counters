import { useState } from 'react';
import NewCounter from './components/NewCounter';
import './App.css';

const App = () => {
  const [numCounter, setNumCounter] = useState(1)
  const [saves, setSaves] = useState([0])
  const [action, setAction] = useState('adding')

  const addCounter = () => {
    setAction('adding')
    let temp = saves
    temp.push(0)
    setNumCounter(numCounter + 1)
    setSaves(temp)
  }

  const subtractCounter = () => {
    if(numCounter === 1) {
      return
    }
    else {
      console.log("Starting animation")
      
      let last = document.querySelectorAll(".new-counter")
      last[last.length - 1].classList.add("subtract")
      
      setAction("subtract")
      setTimeout(() => {setNumCounter(numCounter - 1)}, 400)
      
    }
  }

  let Counters = () => {
    let arr = []
    for(let i = 0; i < numCounter; i++) {
      if(action === 'adding') {
        arr.push(<NewCounter class={"adding"} key={i} saveCount={saves[i]} data={i} saves={saves} setSaves={setSaves}/>)
      }
      else {
        arr.push(<NewCounter class={" "} key={i} saveCount={saves[i]} data={i} saves={saves} setSaves={setSaves}/>)
      }
    }

    return (<div className='container'>
      {arr.map(input => input)}
    </div>)
  }

  return (
    <div className="App">
      <div className='button-header'>
        <button onClick={addCounter} style={{backgroundColor: "#28a745"}}>Add Counter</button>
        <button onClick={subtractCounter} style={{backgroundColor: "#dc3545"}}>Subtract Counter</button>
      </div>
      
      <Counters />

    </div>
  );
}

export default App;
