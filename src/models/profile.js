'use strict';
import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: {type: String, required: true},
  username: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

module.exports = mongoose.model('Profile', profileSchema);