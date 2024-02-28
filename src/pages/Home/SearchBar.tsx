import React from 'react'
import { Box, Button, Paper, Typography, TextField, IconButton, InputAdornment } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { ThemeProvider } from '@mui/material/styles';
import { buttonTheme } from '../../styles/theme';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    //TODO: Need a function to input search

    //TODO: Autocomplete function?

    //TODO: Find location of user

    //TODO: Set search based on button selected (eg searching for groomers vs vet)

    return(
        <>
       
            <Box sx={{
                position: 'absolute',
                bottom: -50, 
                left: 0, 
                right: 0, 
                width: '100%', 
                display: 'flex',
                justifyContent: 'center',
                p: 2, 
                
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
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>
                        )
                      }}
                    label="Location"
                    >
                    <SearchIcon/>
                    </TextField >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Choose Date" 
                        sx={{
                            width:'20vh'
                        }}/>
                        <TimePicker label="Choose Time" 
                        sx={{
                            width:'20vh'
                        }}/>
                        <ThemeProvider theme={buttonTheme}>
                            <Button variant="contained"
                            sx={{
                                width:'12vh'
                            }}>Search</Button>
                        </ThemeProvider>
                    </LocalizationProvider>
                </Paper>
            </Box>
            <Box
            sx={{
                position: 'absolute',
                bottom: -100, 
                left: -60, 
                right: 0, 
                width: '60%', 
                display: 'flex',
                justifyContent: 'center',
                p: 2, 
                '& > :not(style)': { m: .3},
            }}>
                <ThemeProvider theme={buttonTheme}>
                    <Button variant="contained" color='primary' >Groomers</Button>
                    <Button variant="contained" color='primary' >Vets</Button>
                    <Button variant="contained" color='primary' >Doggy Daycares</Button>
                </ThemeProvider>
            </Box>
        </>
    );
  
}

export default SearchBar;