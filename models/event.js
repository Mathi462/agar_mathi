const mongoose = require('mongoose');

const config = require('../config/database');


const EventSchema = mongoose.Schema({

  title: {
    type: String
  },
  content: {
    type: String
  },
  date: {
    type: String
  },
  place: {
    type: String
  },
  image_path: {
    type: String
  },
  time: {
    type: String
  }


});

const Event = module.exports = mongoose.model('Event', EventSchema);
