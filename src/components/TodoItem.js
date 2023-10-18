import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? 'gray' : 'black' }}>
      <input className="checkbox" type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
      <span className="task-list"> {todo.text} </span>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
