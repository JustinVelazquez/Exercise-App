import { useState } from 'react';
import { Box } from '@mui/material';


// importing components
import { HeroBanner, SearchExercises, Exercises } from '../components';
const Home = () => {
  return (
    <>
      <Box>
        <HeroBanner />
        <SearchExercises />
        <Exercises />
      </Box>
    </>
  );
};

export default Home;
