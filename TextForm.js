import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange =(event)=>{
       console.log("on change");
       setText(event.target.value);
  }


   const[text , setText] = useState("Enter a value");
  return (
    <div>  
      <h1>{props.heading} </h1>   
    <div className="mb-3">
    <label for="myBox" class="form-label">Example textarea</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
    <button className="btn btn-primary" onClick={handleUpClick}>click here</button>
    </div>
    </div>
  ) 
}
