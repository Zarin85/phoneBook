const mongoose = require('mongoose');

const phoneBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  phone: {
    type: String,
    required: [true, 'phone number is required'],
    validate: [/^(?:\+88|88)?(01[3-9]\d{8})$/, 'please input a valid number'],
    unique: true,
  },
});

const Phonebook = mongoose.model('Phonebook', phoneBookSchema);

module.exports = Phonebook;
