const mongoose = require ('mongoose');

const petProfileSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    birthday: {type: Date, required: false},
    age: {type: String, required: true},
    breed: {type: String, required: true},
});

const PetProfile= mongoose.model('petProfile', petProfileSchema);

module.exports= PetProfile;