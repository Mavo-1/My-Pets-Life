const mongoose = require('mongoose');

const careSchema = new mongoose.Schema({
    vetName: {type: String, required: true},
    contactInfo: {
        phoneNumber: {type:String, required: true},
        email: {type: String, required: true},
        address: {type: String, required: true},
    }
});

const PetCareProvider = mongoose.model('PetCareProvider', careSchema);

module.exports = PetCareProvider;