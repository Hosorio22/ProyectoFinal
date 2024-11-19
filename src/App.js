import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import UploadFile from './components/UploadFile';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Cargar datos de localStorage al inicio
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Guardar en localStorage cuando cambien las tareas
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <Container maxWidth="md" className="app-container">
      <Typography variant="h3" gutterBottom>
        Classroom Task Manager
      </Typography>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <UploadFile />
    </Container>
  );
};

export default App;