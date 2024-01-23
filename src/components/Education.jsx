import { useState, Fragment } from "react";

export default function Education({ change }) {
   const [entries, setEntries] = useState({});
   function addEntry() {
      const newID = crypto.randomUUID();
      const newEntry = entry(newID, change);
      setEntries({ ...entries, [newID]: newEntry });
   }
   function removeEntry(id) {
      delete entries[id];
      setEntries({ ...entries });
   }
   return (
      <>
         <button type="button" onClick={addEntry}>
            Add Education Entry
         </button>
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
