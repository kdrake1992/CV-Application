import React from 'react'

export default function Navbar(props) {
  return (
    <div className='Navbar' title='Click the button to create or view resumes.'>
      <label className='toggle'>
        <input type='checkbox'
          onClick={props.onPage}>
        </input>
        <span className='labels' data-on='View' data-off='Create'></span>
      </label>
  </div>
  )
}