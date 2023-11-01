import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

// importing Pages/Components
import { Home, ExerciseDetail } from './pages';
import {Footer, Navbar} from './components'

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
