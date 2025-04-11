import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => [...prevItems, inputText]);
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((_, index) => index !== id));
  }

  function moveItemUp(index) {
    if (index === 0) return; 
    setItems((prevItems) => {
      const newItems = [...prevItems];
      [newItems[index - 1], newItems[index]] = [
        newItems[index],
        newItems[index - 1],
      ];
      return newItems;
    });
  }

  function moveItemDown(index) {
    if (index === items.length - 1) return; 
    setItems((prevItems) => {
      const newItems = [...prevItems];
      [newItems[index + 1], newItems[index]] = [
        newItems[index],
        newItems[index + 1],
      ];
      return newItems;
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <ul>
        {items.map((todoItem, index) => (
          <ToDoItem
            key={index}
            id={index}
            text={todoItem}
            onDelete={deleteItem}
            onMoveUp={moveItemUp}
            onMoveDown={moveItemDown}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
