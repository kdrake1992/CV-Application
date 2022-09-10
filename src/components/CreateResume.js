// import Education from './Education'
// import Skills from './Skills'
// import Work from './Work'

import React, { useState } from 'react'

export default function CreateResume() {
  // State Handlers
  // Basic State Info
  const [enteredFirst, setFirst] = useState('');
  const [enteredLast, setLast] = useState('');
  const [enteredEmail, setEmail] = useState('');
  const [enteredPhone, setPhone] = useState('');

  // Additional
  const [enteredAdd, setAdd] = useState('');


  // Function Handlers
  // Basic Info Handlers
  const firstChangeHandler = (event) => {
    setFirst(event.target.value);
  };
  const lastChangeHandler = (event) => {
    setLast(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };

  // Addtional
  const addChangeHandler = (event) => {
    setAdd(event.target.value);
  };
  // const addEduHandler = (e) => {
  //   e.preventDefault();
  //   console.log('Edu tester');
  // }
  // const addWorkHandler = (e) => {
  //   e.preventDefault();
  //   console.log('Work tester');
  // }
  // const addSkillHandler = (e) => {
  //   e.preventDefault();
  //   console.log('Skill tester');
  // }

  const submitHandler = (e) => {
    e.preventDefault();
    
    const resumeData = {
      first: enteredFirst,
      last: enteredLast,
      email: enteredEmail,
      phone: enteredPhone,

      add: enteredAdd,
    }

    console.log(resumeData);
  }

  return (
    <div className='CreateResume'>
        <h1><u>Create a Resume</u></h1>
        <form id='newResume' onSubmit={submitHandler}>
          {/* Basic Info */}
            <fieldset>
              <legend>Basic Information:</legend> 
              <label>First name*:</label>
              <input type='text' id='first' 
                value={enteredFirst} onChange={firstChangeHandler}
                maxLength={20} required>
              </input>
              
              <label>Last name*:</label>
              <input type='text' id='last' 
                value={enteredLast} onChange={lastChangeHandler}
                maxLength={20} required>
              </input>
              
              <label>Email*:</label>
              <input type='email' id='email' maxLength={30} 
                value={enteredEmail} onChange={emailChangeHandler}
                required>
              </input>

              <label>Phone Number:</label>
              <input type='tel' id='number' 
                  placeholder='012-3456-7890' 
                  pattern='[0-9]{3}-[0-9]{4}-[0-9]{4}' 
                  value={enteredPhone} onChange={phoneChangeHandler}
                  maxLength={13}>
              </input>
            </fieldset>

            {/* Education
              <fieldset>
                <legend>Education:</legend>
                <Education/>

                <div className='buttons'>
                  <button onClick={addEduHandler}>Add</button>
                </div>
              </fieldset> */}

            {/* Work
              <fieldset>
                <legend>Work Experience:</legend>
                <Work/>
                <div className='buttons'>
                  <button onClick={addWorkHandler}>Add</button>
                </div>  
              </fieldset> */}

            {/* Skills
              <fieldset>
                <legend>Skills</legend>
                <Skills/>

              <div className='buttons'>
                <button onClick={addSkillHandler}>Add</button>
              </div>
              </fieldset> */}

            {/* Additional */}
            <fieldset>
              <legend>Additional Information:</legend> 
              <textarea id='addInfo' 
                  rows={10} maxLength={550}
                  value={enteredAdd} onChange={addChangeHandler}>
              </textarea>
            </fieldset>

            {/* Submit Buttons */}
            <fieldset>
            <legend>Submit</legend>
              <div className='buttons'>
                  <button type='reset'>Reset</button>
                  <button>Submit</button>
              </div>
            </fieldset>
        </form>
    </div>
  )
}