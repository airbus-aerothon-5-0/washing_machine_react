import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../App';
import { Grid, Stack, Box, TextField, Button } from '@mui/material';
import dayjs from 'dayjs';

export const User = () => {
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
                        <Grid item xs={12} sm={3}>
                            <TextField sx={{ width: '100%' }} label="User Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField sx={{ width: '100%' }} label="Email" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField sx={{ width: '100%' }} label="Password" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField sx={{ width: '100%' }} label="Role" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Box width='100%' mt={5}>
                        <Button variant="contained" color='success'>Add Data</Button>
                        <Button onClick={() => navigate('/users')} variant="outlined" sx={{ color: "black", borderColor: "black", ml: '10px' }}>Back</Button>
                    </Box>
                </Box>
            </Stack >
        </React.Fragment>
    );
}