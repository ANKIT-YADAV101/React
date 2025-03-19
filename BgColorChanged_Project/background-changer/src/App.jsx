import { useState } from "react";
import "./style.css";

function App(){
  let [color, setcolor] = useState(" ");
  
  let colorChange = (e) => {
      let clickedColor = e.target.innerText.toLowerCase();
      setcolor(clickedColor)
      document.body.style.backgroundColor = clickedColor;
      
  }
  return(
    <>      
      <div className="colorBox">
        <div onClick={colorChange}>Red</div>
        <div onClick={colorChange}>Blue</div>
        <div onClick={colorChange}>Yellow</div>
        <div onClick={colorChange}>Green</div>
        <div onClick={colorChange}>Pink</div>
      </div>  
    </>
  )
}
export default App;