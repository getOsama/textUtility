import React from 'react'
import './styling/Navbar.css'
// import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg border-info nav-${props.navMode} bg-${props.navMode}`}>
          <div className="container-fluid">
            <div className='brandName'>
                <h2 className={`text-${props.navMode==='light'?'dark':'light'}`}>Text Utility</h2>
            </div>
            <div className={`form-check form-switch text-${props.navMode==='light'?'dark':'light'} justify-content-end`}>
                <input className="form-check-input" onClick={props.toggle} type="checkbox" id="switch"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.switch}</label>
            </div>
          </div>
        </nav>
    </div>
  )
}


// setting check on props
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     home: PropTypes.string,
//     services: PropTypes.string
// }

// // setting default props
// Navbar.defaultProps ={
//     title:"BrandName",
//     home: "NavHOME",
//     services: "NavServices"
// }