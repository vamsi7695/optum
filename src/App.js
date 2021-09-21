import React, {useState, useEffect} from "react";
import './App.css';
import MultipleChoice from "./component/mulpleChoice/multipleChoice";
import TextQuestion from "./component/textQuestion/textQuestion";

function App() {

//   const [data, setData] = useState([{
//     "id": 1,
//     "type": "multiple choice",
//     "text": "DO you have any dietary preferences?",
//     "options": [
//       "Avoid gluten",
//       "Avoid diary"
//     ]
//   },
//   {
//     "id": 1,
//     "type": "free text",
//     "text": "Any Aditional Comments?",
//   }
// ]);

  const product = [{
    "id": 1,
    "type": "multiple choice",
    "text": "DO you have any dietary preferences?",
    "options": [
      "Avoid gluten",
      "Avoid diary"
    ]
  },
  {
    "id": 1,
    "type": "free text",
    "text": "Any Aditional Comments?",
  }
]

//  useEffect(() => {
//   fetch('https://cdn-api.co-vin.in/api/')
//   .then(response=>{
//       return response.json();
//   }).then(result=>{
//       setData(product);
//       console.log("printing data", setData);
//   });
//  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <MultipleChoice data={product} />
        <TextQuestion data={product} />
      </header>
    </div>
  );
}

export default App;
