import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Button, TextField, Box, Grid, Stack, MenuItem, InputLabel } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../App';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export const Fabrication = () => {
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState('');
    const [stDate, setStDate] = useState(null);
    const [endDate, setEndDate] = useState('');
    const [eDate, setEDate] = useState(null);
    const handleStartDateChange = (date) => {
        setStartDate(dayjs(date).format('DD/MM/YY'));
        setStDate(date)
    };
    const handleEndDateChange = (date) => {
        setEndDate(dayjs(date).format('DD/MM/YY'));
        setEDate(date)
    };
    const currencies = [
        {
            value: 'sqft'
        },
        {
            value: 'kg'
        },
        {
            value: 'kg/m3'
        },
        {
            value: 'gauge'
        },
        {
            value: 'ingots'
        },
    ];
    useEffect(() => { }, []);
    return (
        <React.Fragment>
            <Stack justifyContent='center' alignItems='center'>
                <Box
                    p='6%'
                    boxShadow="0px 0px 150px 70px #CDCDC9" borderRadius='20px'
                    width='70%'
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Grid container spacing={1} >
                        <Grid item xs={6} sm={3}>
                            <TextField sx={{ width: '100%' }} label="Item" variant="outlined" />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField sx={{ width: '100%' }} label="Raw material" variant="outlined" />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField sx={{ width: '100%' }} id="outlined-basic" label="Quantity" variant="outlined" type="number" onChange={(e) => console.log(e.target.value)} />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField
                                sx={{ width: '100%' }}
                                id="outlined-select-currency"
                                select
                                label="Unit"
                                defaultValue="EUR"
                                helperText="Please select your unit"
                                onChange={(e) => console.log(e.target.value)}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <InputLabel sx={{ fontSize: '12px', pl: '10px' }}>In date</InputLabel>
                                <DatePicker
                                    value={stDate}
                                    onChange={(newValue) => handleStartDateChange(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <InputLabel sx={{ fontSize: '12px', pl: '10px' }}>Out Date</InputLabel>
                                <DatePicker
                                    value={eDate}
                                    onChange={(newValue) => handleEndDateChange(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid >
                    <Box width='100%' mt={5}>
                        <Button variant="contained" color='success'>Add Data</Button>
                        <Button sx={{ml:'10px'}} onClick={()=>navigate('/items')} variant="outlined">Back</Button>
                    </Box>
                </Box>
            </Stack >
        </React.Fragment>
    );
}