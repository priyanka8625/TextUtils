import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const [email, setEmails] = useState("")
    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleLwClick = (event) => {
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleCopyClick = (event) => {
        if(text !== ''){
            navigator.clipboard.writeText(text)
                .then(() => {
                    props.showAlert("Text copied to clipboard!", "success")
                })
                .catch(err => {
                    props.showAlert("Ohh! Something went wrong", "danger")
                });
        }else{
            props.showAlert("Please enter some text first", "danger")
        }
    }
    const handleExtractEmails = () => {
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const extractedEmails = text.match(emailRegex) || [];
        const newEmail = extractedEmails.join(', ');
        setEmails(newEmail);
        if(newEmail==="")
            props.showAlert("No emails found!", "warning")
        else
            props.showAlert("Emails found!", "success")
    };
    const handleRemoveSpaces = ()=>{
        setText(text.replace(/\s+/g, ' '));
        props.showAlert("Removed extra spaces!", "success")
    }
    const handleClearClick = () => {
        setText("")
        props.showAlert("Text cleared!", "success")
    }
    // text = "Text changing action" --> wrong way of updating state variable
    // setText("Text changing action") --> correct way to update states
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'? 'white':'#4a4d50'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#00152b':'white', color: props.mode==='dark'? 'white':'#4a4d50'}} id="myBox" rows="8"></textarea>

                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLwClick}>Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleExtractEmails}>Extract Emails</button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy To Clipboard</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>

            </div>
            <div className="container my-3" style={{color: props.mode==='dark'? 'white':'#4a4d50'}}>
                <h3>Your Text Summary:</h3>
                <p className='mb-2'><b>Emails founds: </b> {email}</p>
                <p >Words: {text.trim().length!==0?text.trim().split(" ").length:0}</p>
                <p>Characters: {text.trim().length} </p>
                <p>Minutes to read: {text.trim().length!==0?text.trim().split(" ").length * 0.008:0} </p>
                <h3>Preview : </h3>
                <p>{text.trim().length===0? 'Nothing to preview': text}</p>
            </div>
        </>

    )
}
