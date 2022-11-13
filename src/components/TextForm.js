import React, {useState} from 'react';

export default function TextForm(props) {
    //State Of Text Area
    const [text, setText] = useState("");

    //Function for changes in text area
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    //Uppercase function
    const handleUpClick = ()=>{
        setText(text.toUpperCase())
        //props.sendMessage("Text Converted To Upper Case", "Success");
    }

    //Lowercase function
    const handleLowClick = ()=>{
        setText(text.toLowerCase())
        //props.sendMessage("Text Converted To Lower Case", "Success");
    }

    //Clear function
    const handleClear = ()=>{
        setText("")
    }

    //Reverse function
    const handleReverse = ()=>{
        var splitStr = text.split("")
        var rev = splitStr.reverse()
        var newText = rev.join("")

        setText(newText)
        //props.sendMessage("Text Reversed", "Success");
    }

    const WORDS = text.split(" ");
    let WordCount = WORDS.length;

    if(WORDS[0] === "" || WORDS[0] === " "){
        WordCount = 0;
    }
    
    //
  return (
    <React.Fragment>
    <div className={`conatiner text-${props.mode.text}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className={`form-control bg-${props.mode.bg} text-${props.mode.text} border-${props.mode.bg}`} value={text} onChange={handleOnChange} placeholder="Enter Text Here" id="myBox" rows="20"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-primary" onClick={handleReverse}>Reverse Text</button>
        <button className="btn btn-danger mx-3" onClick={handleClear}>Clear Text</button>
    </div>
    <div className={`conatiner text-${props.mode.text} my-4`}>
        <p>{WordCount} Words and {text.length} Characters</p>
        <p>Minutes to read the paragraph: {0.008 * WordCount}</p>
        <h1 className='my-4'>Preview</h1>
        <p>{text}</p>
    </div>
    </React.Fragment>
  )
}
