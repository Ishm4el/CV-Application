export default function componentPersonal({ change }) {
   return (
      <>
         <label htmlFor="fname">First Name:</label>
         <input type="text" id="fname" name="fname" onChange={change} />
         <label htmlFor="lname">Last Name:</label>
         <input type="text" id="lname" name="lname" onChange={change} />
         <label htmlFor="email">Email:</label>
         <input type="email" name="email" id="email" onChange={change} />
         <label htmlFor="phoneNumber">Phone Number:</label>
         <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            onChange={change}
         />
      </>
   );
}
