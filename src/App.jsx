import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  function addItem(inputText) {
    setItems((prevItems) => [
      ...prevItems,
      { id: Date.now(), text: inputText }
    ]);
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function moveItemUp(id) {
    setItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      if (index <= 0) return prevItems;
      const newItems = [...prevItems];
      [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
      return newItems;
    });
  }

  function moveItemDown(id) {
    setItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      if (index >= prevItems.length - 1) return prevItems;
      const newItems = [...prevItems];
      [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
      return newItems;
    });
  }

  function handleEditTodo(id, newText) {
    setItems(items.map(item => 
      item.id === id ? { ...item, text: newText } : item
    ));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <ul>
        {items.map((todoItem) => (
          <ToDoItem
            key={todoItem.id}
            id={todoItem.id}
            text={todoItem.text}
            onDelete={deleteItem}
            onMoveUp={moveItemUp}
            onMoveDown={moveItemDown}
            onEdit={handleEditTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;