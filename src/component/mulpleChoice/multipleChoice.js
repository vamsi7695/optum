import React, {useState} from "react";


function MultipleChoice(props) {
    console.log("props", props)
    const [text, setText] = useState();
    const handleText = (event) => {
        setText(event.target.value);
    }
    const isRender = props.data.filter((element) => {
       return element.type === "multiple choice"
    })
    
    console.log("props is", isRender)
    const options = isRender.map((ele) => {
     return ele.options})
     console.log("props op", options)
    const canRender = isRender.length > 0 ? true : false
  return (
    <div>
        { canRender && 
        <>
          <div>
            {isRender.map((ele) => {
                  return ele.text
              })}
          </div>
          {options.map((ele) => {
            return (<>
                <div>
                  <input type="radio" onChange={handleText} value={ele}></input><label for="">{ele}</label>
                </div>
                <div>
                  <input type="radio" onChange={handleText} value={ele}></input><label for="">{ele}</label>
                </div>
              </>
            )
          })}
       
        </>
      }
    </div>

  );
}

export default MultipleChoice;
