import React, { useState } from 'react'
import './styling/Textform.css'

// import PropTypes from 'prop-types'

export default function Textform(props) {

const [text, setText] = useState("")
const onClickUpHandler = () =>{
    console.log("button clicked")
    let newText = text.toUpperCase()
    setText(newText)
}
const onClickLowHandler = () =>{
    console.log("button clicked")
    let newText = text.toLowerCase();
    setText(newText)
}


const onChangeHandler = (event) =>{
    console.log("output changed")
    setText(event.target.value)
}

  return (
        <div className="container mt-5 mb-5">
           <div>
                <h2>Type Text</h2>
                <textarea className="form-control" onChange={onChangeHandler} value={text} id="exampleFormControlTextarea1" rows="3"></textarea>
                <button className='btn btn-dark mt-4 mx-2' onClick={onClickUpHandler}>Convert to Uppercase</button>
                <button className='btn btn-dark mt-4' onClick={onClickLowHandler}>Convert to Lowercase</button>
           </div>
           <div>
                <h2 className='mt-3'>Text Summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes Read </p>
           </div>
           <div>
                <h2 className='mt-3'>Text Preview</h2>
                <p>{text}</p>
           </div>
        </div>
  )
}
  
