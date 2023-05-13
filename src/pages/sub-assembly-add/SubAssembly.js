import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Grid, Stack, InputLabel, Box, TextField, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export const SubAssembly = () => {
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState('');
    const [stDate, setStDate] = useState(null);
    const [endDate, setEndDate] = useState('');
    const [eDate, setEDate] = useState(null);
    const [process, setProcess] = useState('');
    const [machineId, setMachineId] = useState('');
    const [itemId, setItemId] = useState('');
    const handleStartDateChange = (date) => {
        setStartDate(dayjs(date).format('YYYY-DD-MM'));
        setStDate(date)
    };
    const handleEndDateChange = (date) => {
        setEndDate(dayjs(date).format('YYYY-DD-MM'));
        setEDate(date)
    };

    const handleSubmit = () =>{
        fetch("/api/v1/subAssembly/create", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
                in_date: startDate,
                out_date: endDate,
                processName: process,
                machineId: machineId,
                fabrication_item_ids:[itemId]
            }),
          })
            .then(() => {
               navigate('/sub-assembly')
            })
            .catch((err) => {
              console.log(err);
            });
    }
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
                            <TextField sx={{ width: '100%' }} label="Process" variant="outlined" value={process} onChange={(e)=>setProcess(e.target.value)} />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField sx={{ width: '100%' }} label="Item ID" variant="outlined" value={itemId} onChange={(e)=>setItemId(e.target.value)}/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField sx={{ width: '100%' }} label="Machine ID" variant="outlined" value={machineId} onChange={(e)=>setMachineId(e.target.value)}/>
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
                        <Button variant="contained" color='success' onClick={handleSubmit}>Add Data</Button>
                        <Button onClick={() => navigate('/sub-assembly')} variant="outlined" sx={{ color: "black", borderColor: "black", ml: '10px' }}>Back</Button>
                    </Box>
                </Box>
            </Stack >
        </React.Fragment>
    );
}