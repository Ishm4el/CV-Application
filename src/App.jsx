import { useState } from "react";
import "./App.css";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Practical from "./components/Practical";

function App() {
   const [display, setDisplayPersonal] = useState({});
   const [dynamicDisplayEducation, setDynamicDisplayEducation] = useState({});
   const [dynamicDisplayExperience, setDynamicDisplayExperience] = useState({});
   const [focus, setFocus] = useState(1);

   function handleDisplayPersonal(e) {
      setDisplayPersonal({ ...display, [e.target.id]: e.target.value });
   }

   function handleDynamicDisplayEducation(e) {
      setDynamicDisplayEducation((dynamicDisplayEducation) =>
         dynamicSetter(dynamicDisplayEducation, e)
      );
   }

   function handleDynamicDisplayExperience(e) {
      setDynamicDisplayEducation((dynamicDisplayEducation) =>
         dynamicSetter(dynamicDisplayEducation, e)
      );
   }

   function dynamicSetter(dynamicDisplay, e) {
      dynamicDisplay[e.target.parentNode.dataset.key] = {
         ...dynamicDisplay[e.target.parentNode.dataset.key],
      };
      dynamicDisplay[e.target.parentNode.dataset.key][e.target.id] =
         e.target.value;
      return { ...dynamicDisplay };
   }

   return (
      <div className="container-main">
         <div className="container-form">
            <div className="container-section">
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
                  <Personal change={handleDisplayPersonal} />
               </div>
            </div>
            <div className="container-section">
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
                  <Education change={handleDynamicDisplayEducation} />
               </div>
            </div>
            <div className="container-section">
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
                  <Practical change={handleDynamicDisplayEducation} />
               </div>
            </div>
         </div>
         <div className="container-display">
            {JSON.stringify(display)}
            {JSON.stringify(dynamicDisplayEducation)}
         </div>
      </div>
   );
}

export default App;
