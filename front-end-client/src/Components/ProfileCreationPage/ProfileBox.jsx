import { useState } from "react";

const ProfileBox = ({addUserInfo}) => {

    const [enteredJobRole, setEnteredJobRole] = useState ("")
    const [enteredCareerGoals, setEnteredCareerGoals] = useState ("")
    const [enteredDOBDay, setEnteredDOBDay] = useState ()
    const [enteredDOBMonth, setEnteredDOBMonth] = useState ()
    const [enteredDOBYear, setEnteredDOBYear] = useState ()
    const [ enteredGender, setEnteredGender] = useState ("")
    const [ enteredAccessNeeds, setEnteredAccessNeeds] = useState ("")

    const handleSignupClick = async(event) => {
        event.preventDefault();
        if (!enteredJobRole, !enteredCareerGoals, !enteredGender, !enteredAccessNeeds) {
            alert("Please enter all fields")
            // highlight fields that are left empty
        } else {
            let temp = {
                // DOB: enteredDOB,
                Gender: enteredGender,
                // do we only need the above two as they will be the ones that need to be added to the database?
            }
            addUserInfo(temp)
        } console.log(enteredDOBDay + "/" + enteredDOBMonth + "/" + enteredDOBYear);

    }

    return (
        <div>
            <form className="profileCreation" onSubmit={(event)=> {handleSignupClick(event)}}>
            <label> Job Role/Title:</label>
                <input className="input-box" type="text" value={enteredJobRole} onChange={(e)=>{setEnteredJobRole(e.target.value)}}/>
                <br>
                </br>
                <label> Career Goals:</label>
                <input className="input-box" type="text" value={enteredCareerGoals} onChange={(e)=>{setEnteredCareerGoals(e.target.value)}}/>
                <br/>
                <br/>
                <label> Date of Birth:</label>
                <div className="select-date">
                <select id="select-day" onChange={(e)=>{setEnteredDOBDay(e.target.value)}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>

                <select id="select-month" onChange={(e)=>{setEnteredDOBMonth(e.target.value)}}>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select id="select-year" onChange={(e)=>{setEnteredDOBYear(e.target.value)}}>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                </select>
                </div>


                <br>
                </br>
                <label> Gender:</label>
                <input className="input-box" type="text" value={enteredGender} onChange={(e)=>{setEnteredGender(e.target.value)}}/>
                <input type="submit" value="Add"/>

            </form>

        </div>
    )
}
export default ProfileBox;