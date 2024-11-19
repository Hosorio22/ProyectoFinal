import React, { useState } from 'react';
import { Button, Box, Grid, Typography } from '@mui/material';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Task List
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Button onClick={() => setFilter('all')}>All</Button>
        <Button onClick={() => setFilter('completed')}>Completed</Button>
        <Button onClick={() => setFilter('pending')}>Pending</Button>
      </Box>
      <Grid container spacing={2}>
        {filteredTasks.map((task) => (
          <Grid item xs={12} sm={6} key={task.id}>
            <TaskCard
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TaskList;