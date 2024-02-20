import React from 'react'
import { Box, Button, Paper, Typography, TextField } from '@mui/material';


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

            <Box>
                <Paper elevation={6}
                sx={{
                    '& > :not(style)': { m: 3, width: '50vh' },
                }}> 
                    <TextField 
                    sx={{
                        
                    }}></TextField>
                </Paper>
            </Box>
        </>
    );
  
}

export default SearchBar;