import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  const [task, setTask] = useState('');     // State to hold new task input
  const dispatch = useDispatch();        // Allows dispatching actions to Redux store

   // Handler function to add a new task
  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));    // Dispatches action to add new task to Redux store
      setTask('');            // Clears input field after adding task
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="add-btn" onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
