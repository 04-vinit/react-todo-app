import React, { useState } from "react";
import Todolist from "./Todolist";

function App() {
  const [inputList, setinputList] = useState();
  const [items, setitems] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };
  const listOfItem = () => {
    // for validation or non empty field
    let x=document.getElementById("input").value;
    if(x=="")return false;


    setitems((olditems) => {
      return [...olditems, inputList]; 
    });
    setinputList("");
  };
  const deleteItem = (id) => {
    console.log("clicked");
    setitems((olditems) => {
      return olditems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  
  return (
    <>
      <div className="main_div">
        <div className="center_div" >
          <br />
          <h1>Todo list</h1>
          <br />
          <input
            type="text"
            placeholder="Enter tasks"
            id="input"
            
            // value={inputList}
            value={inputList || ''}
            onChange={itemEvent}
          />
          <button onClick={listOfItem} >+</button>
          <ol>
            {/* <li> {inputList}</li> */}
            {items.map((itemVal, index) => {
              return (
                <Todolist
                  text={itemVal}
                  id={index}
                  key={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
