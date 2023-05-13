import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Grid, Stack, Box, TextField, Button } from '@mui/material';

export const User = () => {
    const navigate = useNavigate()
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const handleSubmit = () => {
        fetch("/api/v1/auth/register", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
                username: email,
                password: password,
                name: username,
                role_names: role
            }),
        })
            .then(() => {
                navigate('/users')
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
                        <Grid item xs={12} sm={3}>
                            <TextField sx={{ width: '100%' }} label="User Name" variant="outlined" value={username} onClick={(e) => setUserName(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField sx={{ width: '100%' }} label="Email" variant="outlined" value={email} onClick={(e) => setEmail(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField sx={{ width: '100%' }} label="Password" variant="outlined" value={password} onClick={(e) => setPassword(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField sx={{ width: '100%' }} label="Role" variant="outlined" value={role} onClick={(e) => setRole(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Box width='100%' mt={5}>
                        <Button variant="contained" color='success' onClick={handleSubmit}>Add Data</Button>
                        <Button onClick={() => navigate('/users')} variant="outlined" sx={{ color: "black", borderColor: "black", ml: '10px' }}>Back</Button>
                    </Box>
                </Box>
            </Stack >
        </React.Fragment>
    );
}