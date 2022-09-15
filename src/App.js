import { useState } from 'react';
import NewCounter from './components/NewCounter';
import './App.css';

const App = () => {
  const [numCounter, setNumCounter] = useState(2)
  const [saves, setSaves] = useState([0, 0])

  const addCounter = () => {

    setNumCounter(numCounter + 1)
  }


  let Counters = () => {
    let arr = []
    for(let i = 0; i < numCounter; i++) {
      arr.push(<NewCounter key={i} saveCount={saves[i]} data={i} setSaves={setSaves}/>)
    }
    return (<div className='container'>
      {arr.map(input => input)}
    </div>)
  }

  return (
    <div className="App">
      <div>
        <button onClick={addCounter}>Add Counter</button>
        <button onClick={() => setNumCounter(numCounter - 1)}>Subtract Counter</button>
      </div>
      
      <Counters />

    </div>
  );
}

export default App;