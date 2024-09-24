import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoItems.module.css';

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className={styles.itemscontainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name} // Ensure each item has a unique key
          todoName={item.name}
          duedate={item.duedate}
          onDeleteClick={onDeleteClick} // Pass onDeleteClick prop to TodoItem
        />
      ))}
    </div>
  );
}

export default TodoItems;
