'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Ride Schema
 */
var RideSchema = new Schema({
  // name: {
  //   type: String,
  //   default: '',
  //   required: 'Please fill Ride name',
  //   trim: true
  // },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  date: {
    type:Date
  },
  price: {
    type: String
  },
  departure:{
    type:String
  },
  arrival:{
    type:String
  }
});

mongoose.model('Ride', RideSchema);
