import React from 'react';
import { Card, CardContent, Typography, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TaskItem({ task, updateTask, deleteTask }) {
  const toggleComplete = () => {
    updateTask(task.id, { ...task, completed: !task.completed });
  };

  return (
    <Card variant="outlined" style={{ marginBottom: '10px' }}>
      <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox checked={task.completed} onChange={toggleComplete} />
            <Typography variant="h6" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </Typography>
          </div>
          <IconButton onClick={() => deleteTask(task.id)}>
            <DeleteIcon color="error" />
          </IconButton>
        </div>
        {task.file && (
          <Typography variant="body2" style={{ marginTop: '10px' }}>
            Archivo cargado: <a href={URL.createObjectURL(task.file)} target="_blank" rel="noopener noreferrer">{task.file.name}</a>
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default TaskItem;