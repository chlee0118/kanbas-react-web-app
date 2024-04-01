import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const buttonStyle = {
        padding: '10px 15px',
        margin: '5px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        backgroundColor: 'blue',
        textDecoration: 'none',
        display: 'inline-block'
    };
    const secondButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'red',
    };
    const yellowButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'gold',
        color: 'black'
    };
    const greenButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'green',
    };
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1, 
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [todos, setTodos] = useState([] as Array<{
        id: number;
        title: string;
        description: string;
        due: string;
        completed: boolean;
    }>);
    const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
    };
    const removeTodo = async (todo: any) => {
        const response = await axios
          .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const fetchTodoById = async (id: any) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const [errorMessage, setErrorMessage] = useState(null);
    const deleteTodo = async (todo: any) => {
        try {
            const response = await axios.delete(
            `${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
      };
    const updateTodo = async () => {
        try {
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };
    useEffect(() => {
      fetchTodos();
    }, []);

    return (
      <div>
        <h3>Working with Arrays</h3>
        {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
        )}
        <input type="number" value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: Number(e.target.value) })}/>
        <input type="text" value={todo.title}
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}/>
        <textarea value={todo.description}
            onChange={(e) => setTodo({ ...todo,
            description: e.target.value })} />
        <input value={todo.due} type="date"
            onChange={(e) => setTodo({
            ...todo, due: e.target.value })} />
        <label>
            <input checked={todo.completed} type="checkbox"
            onChange={(e) => setTodo({
                ...todo, completed: e.target.checked })} />
            Completed
        </label>
        <br/>
        <button onClick={postTodo} style={buttonStyle}> Post Todo </button>
        <button onClick={updateTodo} style={greenButtonStyle}>
        Update Todo
        </button>
        <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input checked={todo.completed}
              type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button onClick={() => deleteTodo(todo)}
            style={secondButtonStyle}>
            Delete
            </button>
            <button onClick={() => fetchTodoById(todo.id)} style={yellowButtonStyle}>
            Edit
            </button>
            {todo.title}
          </li>
        ))}
        </ul>
        <h4>Retrieving Arrays</h4>
        <a href={API} style={buttonStyle}>
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <input value={todo.id}
            onChange={(e) => setTodo({ ...todo,
            id: Number(e.target.value) })}/>
        <a href={`${API}/${todo.id}`} style={buttonStyle}>
            Get Todo by ID
        </a>
        <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`} style={buttonStyle}>
            Get Completed Todos
        </a>
        <h3>Creating new Items in an Array</h3>
        <a href={`${API}/create`} style={buttonStyle}>
            Create Todo
        </a>
        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`} style={secondButtonStyle}>
            Delete Todo with ID = {todo.id}
        </a>
        <br/>
        <h3>Updating an Item in an Array</h3>
        <input type="number" value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: Number(e.target.value) })}/>
        <input type="text" value={todo.title}
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}/>
        <a href={`${API}/${todo.id}/title/${todo.title}`} style={buttonStyle}>
            Update Title to {todo.title}
        </a>
        <input type="checkbox" 
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        checked={todo.completed}/>
        <a href={`${API}/${todo.id}/completed/${todo.completed}`} style={buttonStyle}>
            Update Completed
        </a>
        <br/>
        <input type="text" value={todo.description}
            onChange={(e) => setTodo({
            ...todo, description: e.target.value })}
            style={{ width: '33%' }}/>
        <a href={`${API}/${todo.id}/description/${todo.description}`} style={buttonStyle}>
            Update Description
        </a>
      </div>
    );
  }
  export default WorkingWithArrays;