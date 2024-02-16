import React from 'react'
import { Box } from '@mui/material';


type Props = {}

const Home = () => {
  return (
    <>
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      //justifyContent: 'center',
      //alignItems: 'center',
      height: {sm:'30vh', md: '40vh', xl: '50vh'},

    }}
    >
      <h1>Home</h1>
      </Box>


    </>
  );
}

export default Home