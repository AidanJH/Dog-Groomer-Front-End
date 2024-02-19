import React from 'react'
import { Box, Typography } from '@mui/material';



const Home = () => {
  const imageUrl = 'https://dg-open-photos.s3.ap-southeast-2.amazonaws.com/dog-toothbrush.jpg';
  return (
    <>
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      // justifyContent: 'center',
      // alignItems: 'center',
      height: {sm:'30vh', md: '40vh', xl: '70vh'},
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: { sm: 'cover', md: 'cover', xl: 'cover' }, 
      backgroundRepeat: { xl: 'no-repeat' },
      backgroundPosition: {sm:'center', md: 'center', xl: 'center'}, 
    }}
    >

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '29%',
            

          }}>

        <Typography
        sx={{
          fontSize: 110,
          fontWeight: 'heavy',
          backgroundcolor: "primary",
          backgroundImage: `linear-gradient(45deg, #5514B4, #FFFFFF)`,
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          border: '2px solid red'
        }}>
          Bookings for your furry friend
        </Typography>

          </Box>

          <Box flex={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: '2px solid red',
            width: '50%'
          }}>

          </Box>

          <Box flex={1}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            border: '2px solid red',
            width: '20%',
            justifyContent: 'center',
            alignItems: 'end',

          }}>
                    <Typography
        sx={{
          fontSize: 80,
          fontWeight: 'heavy',
          backgroundcolor: "primary",
          backgroundImage: `linear-gradient(45deg, #5514B4, #FFFFFF)`,
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          border: '2px solid red',

        }}>
         made easy
        </Typography>
          </Box>
      </Box>


    </>
  );
}

export default Home