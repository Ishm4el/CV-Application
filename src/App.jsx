import { useState } from 'react'
import './App.css';
import Personal from './components/Personal';
import Education from './components/Education';
// import Practical from './components/Practical';

function App() {
  const [display, setDisplay] = useState({});
  const [dynamicDisplay, setDynamicDisplay] = useState({});

  function handleDisplay(e) {
    setDisplay({...display, [e.target.id]: e.target.value});
  }

  function handleDynamicDisplay(e, id) {
    console.log(e + " " + id);
    setDynamicDisplay({...dynamicDisplay, test: "up"})
  }

  return (
    <div className='container-main'>
      <div className='container-form'>
        <form>
          <Personal change={handleDisplay} />
          <Education change={handleDynamicDisplay}/>
        </form>
      </div>
      <div className='container-display'>
        {JSON.stringify(display)}
      </div>
    </div>
  )
}

export default App
