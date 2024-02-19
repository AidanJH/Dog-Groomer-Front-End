import React from 'react'
import { Box, Button, Card, Typography } from '@mui/material';
import { COLOURS } from '../../styles/colours';


const Home = () => {
  const imageUrl = 'https://dg-open-photos.s3.ap-southeast-2.amazonaws.com/dog-toothbrush.jpg';
  
  return (
    <>
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      height: {sm:'30vh', md: '40vh', xl: '70vh'},
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: {xs:'cover' ,sm: 'cover', md: 'cover', xl: 'cover' }, 
      backgroundRepeat: {xs: 'no-repeat', xl: 'no-repeat' },
      backgroundPosition: {xs:'center',sm:'center', md: 'center', xl: 'center'}, 
    }}
    >

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '29%',
            

          }}>

        <Typography m={4} 
        sx={{
          lineHeight: 1.1,
          fontSize: {xs:'cover' ,sm: 'cover', md: 'cover', xl: 110 }, 
          fontWeight: 'heavy',
          backgroundcolor: "primary",
          backgroundImage: `linear-gradient(100deg, ${COLOURS.slogan_text}, ${COLOURS.white})`,
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
            flexDirection: 'row',
            border: '2px solid red',
            width: '50%',
            justifyContent: 'center',
            alignItems: 'end'
          }}>

            <Button>Groomers</Button>
            <Button>Vets</Button>
            <Button>Doggy Daycares</Button>

            <Card
            sx={{
              border: '2px solid red'
            }}>
              
              
            </Card>
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
          backgroundImage: `linear-gradient(160deg, ${COLOURS.slogan_text}, ${COLOURS.white})`,
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