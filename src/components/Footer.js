import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const github = <FontAwesomeIcon icon={faGithub} />

export default class footer extends Component {
  render() {
    return (
        <div className='Footer'>Made by Kevin Drake for The Odin Project <a href="https://github.com/kdrake1992">{github}</a></div>
    )
  }
}
