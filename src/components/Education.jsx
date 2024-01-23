import { useState, Fragment } from "react";

export default function Education() {
   const [entries, setEntries] = useState({});
   function addEntry() {
      const newID = crypto.randomUUID();
      const newEntry = entry(newID);
      setEntries({ ...entries, [newID]: newEntry });
   }
   return (
      <div className="container-form-section">
         <button type="button" onClick={addEntry}>
            Add Education Entry
         </button>
         {Object.keys(entries).map((value) => (
            <div className="container-form-section-sub" key={value}>
               {entries[value]}
            </div>
         ))}
      </div>
   );
}

function entry(id) {
   return (
      <Fragment key={id}>
         <label htmlFor="schoolName">School Name:</label>
         <input type="text" name="schoolName" id="schoolName" />
         <label htmlFor="titleOfStudy">Title of Study:</label>
         <input type="text" name="titleOfStudy" id="titleOfStudy" />
         <label htmlFor="dateOfStudy">Date of Study:</label>
         <input type="date" name="dateOfStudy" id="dateOfStudy" />
      </Fragment>
   );
}
