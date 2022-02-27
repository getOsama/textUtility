import React, { useState } from 'react'
// import ReactDOM from 'react-dom';
// import {CopyToClipboard} from 'react-copy-to-clipboard';
import './styling/Textform.css'

// import PropTypes from 'prop-types'

export default function Textform(props) {

const [text, setText] = useState("")
const clearTextHandler = () =>{
    console.log("button clicked")
    setText("")
}

const copyHandler = () =>{
    console.log("button clicked")
    var newText = document.getElementById("textArea")
    newText.select()
    navigator.clipboard.writeText(newText.value)
    // setText(newText)
}
const upperCaseHandler = () =>{
    console.log("button clicked")
    let newText = text[0].toUpperCase()+text.slice(1).toLowerCase()
    setText(newText)
}
const lowerCaseHandler = () =>{
    console.log("button clicked")
    let newText = text.toLowerCase();
    setText(newText)
}
const titleCaseHandler = () =>{
    console.log("button clicked")
    console.log(text)
    let newText = text.split(" ").map(text=>text[0].toUpperCase()+text.slice(1).toLowerCase()).join(' ');
    
    // console.log(newText)
    setText(newText)
}
const sentenseCaseHandler = () =>{
    console.log("button clicked")
    let newText = text[0].toUpperCase( )+ text.slice(1);   
    // console.log(newText)
    setText(newText)
}


const onChangeHandler = (event) =>{
    console.log("output changed")
    setText(event.target.value)
}

// let lightMode = {
//     color: 'black',
//     backgroundColor:'white'
// }
const [lightMode, setLightMode] = useState()
const [btnText, setBtnText] = useState('Light Mode')

const toggleMode = () =>{
    if(lightMode==null){
        setLightMode({
            color: 'black',
            backgroundColor:'white'
        })
        setBtnText('Dark Mode')
    }
    else{
        setLightMode()
        setBtnText('Light Mode')

    }
}

  return (
        <div style={lightMode} className="container mt-5 mb-5">
           <div >
                <h2 style={lightMode}>Type Text</h2>
                <textarea style={lightMode} className="form-control" onChange={onChangeHandler} value={text} id="textArea" rows="3"></textarea>
                <button className='btn btn-danger mt-4 mx-2' onClick={clearTextHandler}>Clear</button>
                <button className='btn btn-danger mt-4 mx-2' onClick={copyHandler}>Copy Text</button>
                <button className='btn btn-danger mt-4 mx-2' onClick={upperCaseHandler}>UpperCase</button>
                <button className='btn btn-danger mt-4 mx-2' onClick={lowerCaseHandler}>LowerCase</button>
                <button className='btn btn-danger mt-4 mx-2' onClick={titleCaseHandler}>TitleCase</button>
                <button className='btn btn-danger mt-4 mx-2' onClick={sentenseCaseHandler}>SentenseCase</button>
           </div>
           <div>
                <button mode='modeHanlder' onClick={toggleMode} className='btn btn-info mt-4 mx-2'>{btnText}</button>
           </div>
           <div >
                <h2 style={lightMode} className='mt-3'>Text Summary</h2>
                <p style={lightMode}>{text.split(' ').length} words and {text.length} characters</p>
                <p style={lightMode}>{0.008 * text.split(' ').length} Minutes Read </p>
           </div>
           <div>
                <h2 style={lightMode} className='mt-3'>Text Preview</h2>
                <p style={lightMode}>{text}</p>
           </div>
        </div>
  )
}
  
