import React from 'react'

export default function Work() {
  return (
    <div className='formFields'>
        <label>Company Name:</label>
        <input type='text' id='school' maxLength={30}></input>
        <label>Role:</label>
        <input type='text' id='school' maxLength={30}></input>
        <label>City:</label>
        <input type='text' id='city' maxLength={20}></input>
        <label>State:</label>
        <input type='text' id='state' maxLength={20}></input>
        <div className='innerForm'>
            <label>From:</label>
            <input type='text' id='from' maxLength={20}></input>
            <label>To/Present:</label>
            <input type='text' id='to' maxLength={20}></input>
        </div>
        <label>Achievements:</label>
        <textarea id='addInfo' 
                rows={10} maxLength={550}>
        </textarea>
    </div>
  )
}