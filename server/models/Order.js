const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const productOrder = new mongoose.Schema(
    {
        viewAllProducts: [
            {
                id: {type: Schema.Types.ObjectId, 
                    ref: 'Products'},
                    quantity: Number,
                },
            ],
        username: {
                type: Schema.Types.ObjectId, 
                ref: 'User', 
                required: true,
                unique: true,
                trim: true, 
            },

        orderTotal: {
            type: Number,
            required: true,
            },
       
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
          },
        phoneNumber: {
            type: Number,
            required: true,
            unique: true,
            minlength: 10
            },
        address: {
                type: String,
                required: true,
                },
                
        
        status: {  
            type: String,
            enum: ['pending', 'confirmed', 'shipped', 'delivered'],
            default: 'pending',
        },
    },
    {
        timestamps: true,
    });

    const Order = model('Order', orderSchema);
    module.exports = Order;