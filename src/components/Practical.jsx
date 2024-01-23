import { useState, Fragment } from "react";

export default function Practical() {
   const [entries, setEntries] = useState({});
   function addEntry() {
      const newID = crypto.randomUUID();
      const newEntry = entry(newID, setEntries);
      setEntries({ ...entries, [newID]: newEntry });
   }
   function removeEntry(id) {
      delete entries[id];
      setEntries({ ...entries });
   }
   return (
      <>
         <button type="button" onClick={addEntry}>
            Add Experience Entry
         </button>
         {Object.keys(entries).map((value) => (
            <div className="container-form-section-sub" key={value}>
               {entries[value]}
               <button type="button" onClick={() => removeEntry(value)}>
                  Remove
               </button>
            </div>
         ))}
      </>
   );
}

function entry(id) {
   return (
      <Fragment key={id}>
         <label htmlFor="companyName">Company Name:</label>
         <input type="text" name="companyName" id="companyName" />
         <label htmlFor="positionTitle">Position Title:</label>
         <input type="text" name="positionTitle" id="positionTitle" />
         <label htmlFor="responsibility">Responsibility:</label>
         <input type="text" name="responsibility" id="responsibility" />
         <label htmlFor="dateWork">Date Worked</label>
         <input type="datetime" name="dateWork" id="dateWork" />
      </Fragment>
   );
}
