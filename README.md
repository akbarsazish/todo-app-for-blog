In this article, I will teach you how to develop a to-do app with React. After reading this article, you will be able to develop an application that allows users to:

    1.	Add new tasks
    2.	Save tasks to local storage
    3.	View a list of all tasks
    4.	Edit tasks
    5.	Mark tasks as completed and change their appearance
    6.	Delete tasks
    7.	Delete all completed tasks at once

Below is a step-by-step guide on how to create this app. 

    1-	Set Up React App:

    First, make sure you have Node.js and npm (Node Package Manager) installed. If not, you can download and install them from the official website: https://nodejs.org/ 

    Create a new React app using Create React App:
    ************************************************
    * npx create-react-app todo-app                 *
    *  cd todo-app                                  *
    ************************************************

    2- App Structure:
    Modify the src folder structure to organize your components and styles. 
    ***********************************************************
    *  src/                                                   *
    *       components/                                       *
    *           TodoList.js                                   *
    *          TodoItem.js                                    *
    *           TodoForm.js                                   *
    *      App.js                                             *
    *     index.js                                            *
    ***********************************************************


    1- TodoForm Component:
    In TodoForm.js, create a form to add new todos.  
    *******************************************************************************************************
    *  import React, { useState } from 'react';
    *
        const TodoForm = ({ addTodo }) => {
        const [text, setText] = useState('');

        const handleInputChange = (e) => {
            setText(e.target.value);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (text.trim() !== '') {
            addTodo(text);
            setText('');
            }
        };

        return (
            <form onSubmit={handleSubmit}>
              <input  type="text" value={text} onChange={handleInputChange} placeholder="Add a new todo..."  />
               <button type="submit">Add</button>
            </form>
        );
        };
    *
    *   export default TodoForm;
    ***************************************************************************************************************


    2- TodoList Component:
    In TodoList.js, create a component to display the list of todos.
    **********************************************************************************************************
    * import React from 'react';
    *   import TodoItem from './TodoItem';

        const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
        return (
            <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
            ))}
            </div>
        );
        };
    *
    *    export default TodoList;
    **************************************************************************************************************


     3- App Component:
     In App.js, integrate the components and handle the state and logic.

     ***************************************************************************************************************
     *     import React, { useState, useEffect } from 'react';
     *     import TodoForm from './components/TodoForm';
            import TodoList from './components/TodoList';

            const App = () => {
            const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);

            useEffect(() => {
                localStorage.setItem('todos', JSON.stringify(todos));
            }, [todos]);

            const addTodo = (text) => {
                const newTodo = {
                id: Math.random(),
                text,
                completed: false
                };
                setTodos([...todos, newTodo]);
            };

            const toggleComplete = (id) => {
                const updatedTodos = todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
                );
                setTodos(updatedTodos);
            };

            const deleteTodo = (id) => {
                const updatedTodos = todos.filter((todo) => todo.id !== id);
                setTodos(updatedTodos);
            };

            const deleteCompletedTodos = () => {
                const updatedTodos = todos.filter((todo) => !todo.completed);
                setTodos(updatedTodos);
            };

            return (
                <div>
                <h1>Todo App</h1>
                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
                <button onClick={deleteCompletedTodos}>Delete Completed Todos</button>
                </div>
            );
            };
    *
    *    export default App;
    ****************************************************************************************************************

      4- Run the App:
      Run the React app:
      ***********************************
      * npm start                       *
      ***********************************

      Visit http://localhost:3000 in your browser to see the todo app.

     This simple todo app allows users to add, edit, delete, and mark todos as completed. The data is stored in localStorage, and users can also delete all completed tasks at once. Feel free to customize and style the app according to your preferences before posting it on your blog.



     5- index.css file:
       the basic style for your todo app for looking better.
    *************************************************************************************************
    *   body {
    *      margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
            }

            code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
                monospace;
            }

            .container {
            width: 80%;
            background-color: rgb(255, 250, 250);
            margin: 0 auto;
            border-radius: 0.5rem;
            height: 77vh;
            padding: 2%;
            overflow-y: auto;
            }

            input[type=text] {
            width: 15rem;
            padding: 6px 12px;
            margin: 8px 0;
            box-sizing: border-box;
            }

            button {
            border: none;
            color: white;
            padding: 6px 12px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
            border-radius: 4px;
            }

            .submit-btn {
            background-color: #4CAF50;
            }

            .delete-btn {
            background-color: red;
            }

            .completed-btn {
            background-color: gray;
            }

            .todo-list {
            padding: 1rem;
            }

            .task-list {
            padding: 1%;
            margin: 0.3rem;
            }

            .checkbox {
            margin-top: 1rem;
            }

            .line-through {
             text-decoration: line-through;
    *     color: grey;
    *     }
    ************************************************************************************



