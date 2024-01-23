export default function Practical() {
   return (
      <div className="container-form-section">
         <label htmlFor="companyName">Company Name:</label>
         <input type="text" name="companyName" id="companyName" />
         <label htmlFor="positionTitle">Position Title:</label>
         <input type="text" name="positionTitle" id="positionTitle" />
         <label htmlFor="responsibility">Responsibility:</label>
         <input type="text" name="responsibility" id="responsibility" />
         <label htmlFor="dateWork">Date Worked</label>
         <input type="datetime" name="dateWork" id="dateWork" />
      </div>
   );
}
