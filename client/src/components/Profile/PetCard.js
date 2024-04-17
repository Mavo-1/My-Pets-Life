// PetCard.js
import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

const PetCard = ({ pet, onDelete }) => {
    const handleDeleteClick = () => {
        onDelete(pet.id);
    }
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {pet.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: {pet.age}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Breed: {pet.breed}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDeleteClick}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default PetCard;
