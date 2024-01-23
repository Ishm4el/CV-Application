export default function Education() {
    return(
        <>
                <label htmlFor="schoolName">School Name:</label>
                <input type="text" name="schoolName" id="schoolName" />
                <label htmlFor="titleOfStudy">Title of Study:</label>
                <input type="text" name="titleOfStudy" id="titleOfStudy"/>
                <label htmlFor="dateOfStudy">Date of Study:</label>
                <input type="date" name="dateOfStudy" id="dateOfStudy" />
        </>
    );
}