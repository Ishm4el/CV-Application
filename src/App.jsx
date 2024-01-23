import { useState } from "react";
import "./App.css";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Practical from "./components/Practical";

function App() {
   const [display, setDisplay] = useState({});
   const [dynamicDisplay, setDynamicDisplay] = useState({});
   const [focus, setFocus] = useState(1);

   function handleDisplay(e) {
      setDisplay({ ...display, [e.target.id]: e.target.value });
   }

   function handleDynamicDisplay(e) {
      setDynamicDisplay((dynamicDisplay) => {
         dynamicDisplay[e.target.parentNode.dataset.key] = {
            ...dynamicDisplay[e.target.parentNode.dataset.key],
         };
         dynamicDisplay[e.target.parentNode.dataset.key][e.target.id] =
            e.target.value;
         return { ...dynamicDisplay };
      });
   }

   return (
      <div className="container-main">
         <div className="container-form">
            <form>
               <button
                  className="button-select-section"
                  type="button"
                  onClick={() => setFocus(0)}
               >
                  Personal
               </button>
               <div
                  className="container-form-section"
                  style={focus === 0 ? {} : { display: "none" }}
               >
                  <Personal change={handleDisplay} />
               </div>
               <button
                  className="button-select-section"
                  type="button"
                  onClick={() => setFocus(1)}
               >
                  Education
               </button>
               <div
                  className="container-form-section"
                  style={focus === 1 ? {} : { display: "none" }}
               >
                  <Education change={handleDynamicDisplay} />
               </div>
               <button
                  className="button-select-section"
                  type="button"
                  onClick={() => setFocus(2)}
               >
                  Experience
               </button>
               <div
                  className="container-form-section"
                  style={focus === 2 ? {} : { display: "none" }}
               >
                  <Practical change={handleDynamicDisplay} />
               </div>
            </form>
         </div>
         <div className="container-display">
            {JSON.stringify(display)}
            {JSON.stringify(dynamicDisplay)}
         </div>
      </div>
   );
}

export default App;
