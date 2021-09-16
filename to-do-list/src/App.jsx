
import React, { useState } from 'react'
import ToDoLists from './ToDoList';


const App = () => {

  const [inputList, setInputList] = useState("")
  const [Items , setItems] = useState ([])
  
  const itemEvent = (event) => { setInputList(event.target.value)};

  const listItem = () => {
    if (inputList.trim().lenght === 0)
{return;}
    setItems ((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted")

    setItems ((oldItems) =>{
      return oldItems.filter((arrElem , index) => {
        return index !== id ;
      })
    })
  }

  return ( 
  <>
    <div className="main-div">
     <div className="center-div">
       <br />
       <h1>ToDo List</h1>
       <br />
       <input  type="text" placeholder="Add an item" value={inputList} onChange={itemEvent}/>
       <button onClick={listItem}> + </button>
       
       <ol>
         
           {
             Items.map((itemVal , index) => {
               return ( < ToDoLists
                text={itemVal}
                key={index}
                id={index}
                onSelect={deleteItems}
               />
           )
          }
             )
        }
       </ol>
     </div>
    </div>
  </>
  );
};

export default App;






