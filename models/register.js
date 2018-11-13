const mongoose = require('mongoose');

const config = require('../config/database');


const RegisterSchema = mongoose.Schema({

  name: {
    type: String
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  blood_group: {
    type: String
  },
  work: {
    type: String
  },
  state: {
    type: String
  },
  district: {
    type: String
  },
  voluntary: {
      type: String
  },
  blood_donate: {
    type: String
},
mobile: {
    type: String
}


});

const Register = module.exports = mongoose.model('Register', RegisterSchema);
