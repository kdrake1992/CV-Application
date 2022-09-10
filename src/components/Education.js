import React, { useState } from 'react'

export default function Education(props) {
  // Education states
  const [enteredSchool, setSchool] = useState('');
  const [enteredCity, setCity] = useState('');
  const [enteredState, setState] = useState('');
  const [enteredFrom, setFrom] = useState('');
  const [enteredTo, setTo] = useState('');
  const [enteredDegree, setDegree] = useState('');
  const [enteredAchi, setAchi] = useState('');

  // Handlers
  const schoolChangeHandler = (event) => {
    setSchool(event.target.value);
  };

  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };

  const stateChangeHandler = (event) => {
    setState(event.target.value);
  };

  const fromChangeHandler = (event) => {
    setFrom(event.target.value);
  };

  const toChangeHandler = (event) => {
    setTo(event.target.value);
  };

  const degreeChangeHandler = (event) => {
    setDegree(event.target.value);
  };

  const achiChangeHandler = (event) => {
    setAchi(event.target.value);
  };



  return (
    <div className='formFields'>
      <label>School Name:</label>
      <input type='text' id='school' 
      value={enteredSchool} onChange={setSchool}
      maxLength={30}></input>

      <label>City:</label>
      <input type='text' id='city'
      value={enteredCity} onChange={setCity}
      maxLength={20}></input>

      <label>State:</label>
      <input type='text' id='state'
      value={enteredState} onChange={setState}
      maxLength={20}></input>

      <div className='innerForm'>
          <label>From:</label>
          <input type='text' id='from' 
          value={enteredFrom} onChange={setFrom}
          maxLength={20}></input>

          <label>To/Present:</label>
          <input type='text' id='to' 
          value={enteredTo} onChange={setTo}
          maxLength={20}></input>
      </div>

      <label>Degree:</label>
      <input type='text' id='degree' 
      value={enteredDegree} onChange={setDegree}
      maxLength={20}></input>

      <label>Achievements:</label>
      <textarea id='addInfo' 
        value={enteredAchi} onChange={setAchi}
        rows={10} maxLength={550}>
      </textarea>
    </div>
  )
}
