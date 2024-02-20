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
      position: 'relative',
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
          //border: '2px solid red'
        }}>
          Bookings for your furry friend
        </Typography>
      </Grid>

      <Grid item xs={4} sx={{
          display: 'flex',
          flexDirection: 'column',
          //border: '2px solid red',
          width: '50%',
          justifyContent: 'end',
          alignItems: 'left'
      }}>
      </Grid>

      <Grid item xs={4}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          //border: '2px solid red',
          width: '20%',
          justifyContent: 'center',
          alignItems: 'end',
          
          
          }}>
      <Typography m={12} 
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
          textAlign: 'right',
          // border: "2px solid red"
        }}>
         made easy
        </Typography>
      </Grid>
    </Grid>
        

    <SearchBar></SearchBar>
      </Box>
      <Box 
      sx={{
        justifyContent: "end",
        alignItems: 'end',
        //border: '2px solid red'

      }}>

      </Box>

    </>
  );
}

export default Home