import React from 'react'
import './styling/Navbar.css'
// import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid justify-content-center">
                <h3 className='text-white'>Text Utility</h3>                
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