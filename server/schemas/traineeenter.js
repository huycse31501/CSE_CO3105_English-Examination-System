var mongoose = require('mongoose');
var traineeschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  emailid: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  organisation: {
    type: String,
    required: true,
  },
  testid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TestPaperModel',
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = traineeschema;
