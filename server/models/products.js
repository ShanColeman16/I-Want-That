const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
//Added productsSchema and productsModel//
const productsSchema = new mongoose.Schema(
    {
        productsDepartment: {
            type: String,
            required: true,
        },
        productsCategory: {
            type: String,
            required: true,
        },
        productsName: {
            type: String,
            required: true,
        },
        productsImage: {
            type: String,
            required: true,
        },
        productsDescription: {
            type: String,
            required: true,
        },
        productsPrice: {
            type: Number,
            required: true,
        },
        productsQuantity: {
            type: Number,
            required: true,
        },
    });

    const productsModel = mongoose.model('Products', productsSchema);
    model.exports = productsModel;
            

