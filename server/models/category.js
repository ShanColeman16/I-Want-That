const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const categorySchema = new mongoose.Schema(
  {
      categoryDepartment: {
          type: String,
          required: true,
      },
      categoryCategory: {
          type: String,
          required: true,
      },
      categoryName: {
          type: String,
          required: true,
      },
      categoryImage: {
          type: String,
          required: true,
      },
      categoryDescription: {
          type: String,
          required: true,
      },
      categoryPrice: {
          type: Number,
          required: true,
      },
      categoryQuantity: {
          type: Number,
          required: true,
      },
  });

const Category = model('Category', categorySchema);

module.exports = Category