import React from 'react'
import { Box, Button, Paper, Typography, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const SearchBar = () => {
    //TODO: Need a function to input search

    //TODO: Autocomplete function?

    //TODO: Find location of user

    //TODO: Set search based on button selected (eg searching for groomers vs vet)

    return(
        <>
            <Box
            sx={{

            }}>
                <Button>Groomers</Button>
                <Button>Vets</Button>
                <Button>Doggy Daycares</Button>
            </Box>

            <Box sx={{
              position: 'absolute', // Positioned absolutely
              bottom: 0, // At the bottom of the parent Box
              left: 0, // Aligned to the left
              right: 0, // Aligned to the right
              width: '100%', // Take up 100% of the parent width
              display: 'flex',
              justifyContent: 'center', // Center the Paper horizontally
              p: 2, // Add some padding around
                
            }}>
                <Paper elevation={6}
                sx={{
                    '& > :not(style)': { m: 3},
                    display:"flex",
                    flexDirection: "row"
                }}> 
                    <TextField 
                    sx={{
                        width: '50vh' 
                    }}
                    ></TextField>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Choose Date" 
                        sx={{
                            width:'20vh'
                        }}/>
                        <TimePicker label="Choose Time" 
                        sx={{
                            width:'20vh'
                        }}/>

                    </LocalizationProvider>
                </Paper>
            </Box>
        </>
    );
  
}

export default SearchBar;