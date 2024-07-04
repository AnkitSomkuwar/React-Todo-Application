import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);       // Fetches tasks from Redux store
  const dispatch = useDispatch();              // Allows dispatching actions to Redux store
 

  // Handler function to delete a task
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  // Handler function to edit a task
  const handleEdit = (id) => {
    const updatedTask = prompt('Edit the task:', tasks.find(task => task.id === id).text);
    if (updatedTask) {
      dispatch(editTask(id, updatedTask));    //Dispatches action to update task in Redux store
    }
  };

   // Handler function to toggle task completion
  const handleToggle = (id) => {
    dispatch(toggleTask(id));      // Dispatches action to toggle task completion in Redux store
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none', marginLeft: '10px', flexGrow: 1 }}
          >
            {task.text}
          </span>
          <button className="edit-btn" onClick={() => handleEdit(task.id)}>Edit</button>
          <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
