// AddPetForm.js
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const AddPetForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const petData = {
      name: name,
      age: age,
      breed: breed
    };
    onSubmit(petData);
    setName('');
    setAge('');
    setBreed('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Pet Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Add Pet
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddPetForm;
