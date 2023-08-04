import { useState } from "react";

export default function Home() {
  const [todoList,setTodoList] = useState([]);
  const [task , setTask] = useState("");

  const addTask = () => {
    setTodoList(
      prev => {return [...prev, {id: prev.length+1, task:task}]}
    );
    setTask("");
  };

  const removeTask = (id) => {
    const newTodoList = todoList.filter((item) => item.id != id);
    setTodoList(newTodoList);
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <>
      <div className="container">
        <label htmlFor="taskInput">Task manager</label>
        <div>
          <input type="text" placeholder="Enter task..." id="taskInput" value={task} onChange={handleChange}/>
          {task && (
            <button onClick={addTask}>Add task</button>
          )}
        </div>
      </div>
      <div className="todo_list">
        <ul>
          {todoList.map((todo) => {
            return (
              <li key={todo.id}>
                <span>{todo.task}</span>
                <button onClick={() => removeTask(todo.id)}>-</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}