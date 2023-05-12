import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import { Button, TextField, Box, Grid, Stack, InputLabel } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../App';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export const Assembly = () => {
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
                            <TextField sx={{ width: '100%' }} label="Process" variant="outlined" />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField sx={{ width: '100%' }} label="Process ID" variant="outlined" />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField sx={{ width: '100%' }} label="Machine ID" variant="outlined" />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={stDate}
                                    onChange={(newValue) => handleStartDateChange(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <InputLabel sx={{ fontSize: '12px', pl: '10px', pt: '2px' }}>Start date</InputLabel>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={eDate}
                                    onChange={(newValue) => handleEndDateChange(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <InputLabel sx={{ fontSize: '12px', pl: '10px', pt: '2px' }}>End Date</InputLabel>
                            </LocalizationProvider>
                        </Grid>
                    </Grid >
                    <Box width='100%' mt={5}>
                        <Button variant="contained" color='success'>Add Data</Button>
                        <Button onClick={() => navigate('/assembly')} variant="outlined" sx={{ color: "black", borderColor: "black", ml: '10px' }}>Back</Button>
                    </Box>
                </Box>
            </Stack >
        </React.Fragment>
    );
}