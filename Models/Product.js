const { number } = require('joi');
const mongoose = require('mongoose')

const productSchema= new mongoose.Schema (
    {
        title: {
            type:String,
            min:3,
            max:30,
            required: true
     }
     ,
    price:{
            type:String,
            min:3,
            max:100,
            required: true    
    },
    Make:{
        type:String,
            min:3,
            max:20,
            required: true
    }
    }
)

module.exports = mongoose.model("products",productSchema);