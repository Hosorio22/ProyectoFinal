import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function Sidebar({ setFilter }) {
  return (
    <List component="nav" style={{ width: '250px', backgroundColor: '#f4f4f4', height: '100vh' }}>
      <ListItem button onClick={() => setFilter('all')}>
        <ListItemText primary="All Tasks" />
      </ListItem>
      <ListItem button onClick={() => setFilter('completed')}>
        <ListItemText primary="Completed" />
      </ListItem>
      <ListItem button onClick={() => setFilter('pending')}>
        <ListItemText primary="Pending" />
      </ListItem>
    </List>
  );
}

export default Sidebar;