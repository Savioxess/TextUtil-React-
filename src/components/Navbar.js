import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode.bg} bg-${props.mode.bg}`}>
    <div className={`container-fluid`}>
      < a className="navbar-brand"  href="/TextUtil-React-">{props.title}</ a>
      
      
      <div class="form-check form-switch">
      <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
      <label className={`form-check-label text-${props.mode.text} mx-1`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>
      
      
    </div>
    
  </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired, 
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title',
  aboutText: 'About'
}
