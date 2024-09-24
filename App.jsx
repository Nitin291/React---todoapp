import React, { useState } from "react";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Container";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const initialTodoItems = [
    {
      name: "buy milk",
      duedate: "03/10/2024",
    },
    {
      name: "go to college",
      duedate: "10/11/2020",
    },
    {
      name: "love react",
      duedate: "10/11/2021",
    },
  ];
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItems = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, duedate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="todo-container">
      <center>
        <AppName />
        <Container>
          <AddTodo onNewItems={handleNewItems} />
          {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
          <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
        </Container>
      </center>
    </div>
  );
}

export default App;
