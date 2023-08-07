import * as React from 'react';
import './App.css';
import './components/LocationBar'
import LocationBar from './components/LocationBar';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box p={2}>
      <LocationBar/>
    </Box>

    
  );
}

export default App;
