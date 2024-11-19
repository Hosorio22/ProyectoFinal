import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const TaskCard = ({ task, updateTask, deleteTask }) => {
  const toggleComplete = () =>
    updateTask({ ...task, completed: !task.completed });

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {task.text}
        </Typography>
        <Box>
          <Button
            onClick={toggleComplete}
            color={task.completed ? 'secondary' : 'primary'}
          >
            {task.completed ? 'Mark Pending' : 'Mark Completed'}
          </Button>
          <Button onClick={() => deleteTask(task.id)} color="error">
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;