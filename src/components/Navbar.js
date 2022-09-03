import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    return (
        <div className='Navbar'>
            <ul>
                <li><button id="vres">View Resumes</button></li>
                <li><button id="cres">Create Resume</button></li>
            </ul>
        </div>

    )
  }
}
