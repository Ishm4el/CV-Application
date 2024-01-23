import { useState } from 'react'
import './App.css';
import Personal from './components/Personal';
// import Education from './components/Education';
// import Practical from './components/Practical';

function App() {
  const [display, setDisplay] = useState({});

  function handleDisplay(e) {
    setDisplay({...display, [e.target.id]: e.target.value});
  }



  return (
    <div className='main-container'>
      <div className='container-form'>
        <form>
          <Personal change={handleDisplay} />
        </form>
      </div>
      <div className='container-display'>
        {JSON.stringify(display)}
      </div>
    </div>
  )
}

export default App
