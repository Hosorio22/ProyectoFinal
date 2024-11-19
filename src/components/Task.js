import React from 'react';

function Task({ task, updateTask, deleteTask }) {
  const toggleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={toggleComplete}>
        {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;