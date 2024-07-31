'use client'
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


export default function Reservation() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [persons, setPersons] = useState(1);
    const [reservationTime, setReservationTime] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ firstName, lastName, email, persons, reservationTime });
        // Here you would typically send this data to your backend
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <Typography variant="h3" component="h1" gutterBottom className='flex justify-center mt-5 font-bold text-center p-5'>
                Reservation Form
            </Typography>
            <div className='p-5'>
                <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: 'auto', padding: 5, backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}>
                    <TextField
                        fullWidth
                        label="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        required
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="persons-label">Number of Persons</InputLabel>
                        <Select
                            labelId="persons-label"
                            value={persons}
                            onChange={(e) => setPersons(e.target.value)}
                            label="Number of Persons"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <MenuItem key={num} value={num}>{num}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <DateTimePicker
                        label="Reservation Time"
                        value={reservationTime}
                        onChange={(newValue) => setReservationTime(newValue)}
                        renderInput={(params) => <TextField {...params} fullWidth margin="normal" required />}
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Submit Reservation
                    </Button>
                </Box>
            </div>
        </LocalizationProvider>
    )
}