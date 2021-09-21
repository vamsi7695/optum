import React, {useState} from "react";


function TextQuestion(props) {
    console.log("props", props)
    const [text, setText] = useState();
    const handleText = (event) => {
        setText(event.target.value);
    }
    const isRender = props.data.filter((element) => {
       return element.type === "free text"
    })
    console.log("props", isRender)
    const canRender = isRender.length > 0 ? true : false
  return (
    <div>
        { canRender && 
        <>
    <div>{isRender.map((ele) => {
        return ele.text
    })}</div>
      <input type="text" onChange={handleText}></input> </>}
    </div>

  );
}

export default TextQuestion;
