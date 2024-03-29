import { useState, Fragment } from "react";

export default function Education({ change }) {
   const [entries, setEntries] = useState({});
   function addEntry() {
      const newID = crypto.randomUUID();
      const newEntry = entry(newID, change);
      // newEntry.props.children[1].focus();
      setEntries({ ...entries, [newID]: newEntry });
      //   console.log(document.getElementById("schoolName"));
      //   document.getElementById("schoolName").focus();
   }
   function removeEntry(id) {
      delete entries[id];
      setEntries({ ...entries });
   }
   return (
      <>
         {Object.keys(entries).map((value) => (
            <div
               className="container-form-section-sub"
               key={value}
               data-key={value}
            >
               {entries[value]}
               <button type="button" onClick={() => removeEntry(value)}>
                  Remove
               </button>
            </div>
         ))}
         <button type="button" onClick={addEntry}>
            Add Education Entry
         </button>
      </>
   );
}

function entry(id, change) {
   return (
      <Fragment>
         <label htmlFor="schoolName">School Name:</label>
         <input
            type="text"
            name="schoolName"
            id="schoolName"
            onChange={change}
         />
         <label htmlFor="titleOfStudy">Title of Study:</label>
         <input
            type="text"
            name="titleOfStudy"
            id="titleOfStudy"
            onChange={change}
         />
         <label htmlFor="dateOfStudy">Date of Study:</label>
         <input
            type="date"
            name="dateOfStudy"
            id="dateOfStudy"
            onChange={change}
         />
      </Fragment>
   );
}
