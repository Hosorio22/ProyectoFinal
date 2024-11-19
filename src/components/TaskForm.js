import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    addTask({
      id: Date.now(),
      text: taskText,
      completed: false,
    });
    setTaskText('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: 2 }}>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;