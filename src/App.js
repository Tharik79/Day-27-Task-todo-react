//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { propTypes } from 'react-bootstrap/esm/Image';


function App() {
  return (
    <div className="App">
      <TodoList/>
      
    </div>
  );
}

export default App;

function TodoList(){
      // variable assign using usestate
      const[task, setTask] = useState("");
      //variable assigned for list of stored items or tasks in an array.
      const[listItem, setListItem] = useState([]);

      // to write a function for items to add by onChange event
      const itemAdd = (e) => { setTask(e.target.value); };

      // adding a new task or item to an old arry list using spread operator.
      const itemList = () => {
          setListItem(  (oldItems) => {
            return [...oldItems, task];
          });
          setTask(""); // to empty the placeholder after item added.
      };

      const deleteItems = (id) => {
        console.log("deleted");

        setListItem( (oldItems) => {
          return oldItems.filter = ( (arrElem, index) => {
            return index !== id;
          });
        });
      };
      

    return(

        <div className='container'>
          <div className='list'>
            <br/>
            <h2>ToDo List</h2>
            <br/>
            <input type="text" placeholder='Add a item' onChange={itemAdd}/>
            <button type="button" class="btn btn-primary" onClick={itemList}>Add Item</button>

                <ol>
                  {/* <li>{task}</li> */}
                  { listItem.map((s, index) => {
                    return ( <ListedItems key={index} id={index} text={s}  onSelect={deleteItems} />
                    );
                  })}
                </ol>

          </div>
        </div>

    )
}

function ListedItems(props){

      
  return( 
      <div className='todo-style'>
               
          <li> {props.text} </li>
          <i id="icon" class="fas fa-trash-alt fa-lg" onClick={ () =>{ props.onSelect(props.id); }} ></i>
      </div>
  );
};