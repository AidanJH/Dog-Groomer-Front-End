import React from 'react'
import { Box, Button, Card, Grid, Paper, Typography } from '@mui/material';
import { colours, fontSizes} from '../../styles';
import SearchBar from './SearchBar';


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

    <Grid container spacing={2}>
      <Grid item xs={4} sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '29%',
      }}>
        <Typography m={4} 
        sx={{
          lineHeight: 1.1,
          fontSize: {xs: fontSizes.xs, sm: fontSizes.s, md: fontSizes.m, xl: fontSizes.xl }, 
          fontWeight: 'heavy',
          backgroundcolor: "primary",
          backgroundImage: `linear-gradient(100deg, ${colours.slogan_text}, ${colours.white})`,
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          border: '2px solid red'
        }}>
          Bookings for your furry friend
        </Typography>
      </Grid>

      <Grid item xs={4} sx={{
          display: 'flex',
          flexDirection: 'column',
          border: '2px solid red',
          width: '50%',
          justifyContent: 'end',
          alignItems: 'left'
      }}>
        <SearchBar></SearchBar>
      </Grid>

      <Grid item xs={4}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          border: '2px solid red',
          width: '20%',
          justifyContent: 'center',
          alignItems: 'end'
          }}>
      <Typography
        sx={{
          fontSize: {xs: fontSizes.xs, sm: fontSizes.s, md: fontSizes.m, xl: fontSizes.xl },
          fontWeight: 'heavy',
          backgroundcolor: "primary",
          backgroundImage: `linear-gradient(160deg, ${colours.slogan_text}, ${colours.white})`,
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          border: '2px solid red'
        }}>
         made easy
        </Typography>
      </Grid>
    </Grid>

      </Box>


    </>
  );
}

export default Home