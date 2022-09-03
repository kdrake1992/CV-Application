import React, { Component } from 'react'

export default class CreateResume extends Component {
  render() {
    return (
        <div className='CreateResume'>
            <h1><u>Create a Resume</u></h1>
            <form id='newResume'>
                <fieldset>
                    <legend>Basic Information:</legend> 
                    <label>First name*:</label>
                    <input type='text' id='first' maxLength={20} required></input>
                    <label>Last name*:</label>
                    <input type='text' id='last' maxLength={20} required></input>
                    <label>Email*:</label>
                    <input type='email' id='email' maxLength={30} required></input>
                    <label>Phone Number:</label>
                    <input type='tel' id='number' 
                        placeholder='012-3456-7890' 
                        pattern='[0-9]{3}-[0-9]{4}-[0-9]{4}' 
                        maxLength={13}>
                    </input>
                </fieldset>

                <fieldset>
                    <legend>Education:</legend>

                </fieldset>

                <fieldset>
                    <legend>Work Experience:</legend>   
                </fieldset>

                <fieldset>
                    <legend>Additional Information:</legend> 
                    <textarea id='addInfo' rows={10} cols={50} 
                        maxLength={550}>

                    </textarea>
                </fieldset>

                <div className='buttons'>
                    <button type='submit'>Submit</button>
                    <button type='reset'>Reset</button>
                </div>

            </form>

        </div>

    )
  }
}
