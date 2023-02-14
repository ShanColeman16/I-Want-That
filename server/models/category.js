const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const categorySchema = new Schema({
  
});

const Category = model('Category', categorySchema);

module.exports = Category