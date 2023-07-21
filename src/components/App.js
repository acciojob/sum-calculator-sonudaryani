
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [sum, setSum] = useState(0);

  const handleClick = (event) => {
    event.preventDefault();
    setSum(sum + parseInt(event.target.value));
}
  return (
    <div>
        <h1>Sum Calculator</h1>
        <input type="number" onKeyUp={handleClick}/>
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
