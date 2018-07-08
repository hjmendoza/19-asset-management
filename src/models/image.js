'use strict';

import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  title: {type: String, required: true},
  file: {type: String, required: true, unique: true},
});

module.exports = mongoose.model('Image', imageSchema);