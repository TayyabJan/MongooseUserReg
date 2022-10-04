const router = require("express").Router();
const e = require("express");
const Products = require("../Models/Product");
const verifyToken = require("./verifytoken");

router.post("/", verifyToken, async (req,res) =>{
    const all = await Products.find({})
    
    res.send(all);   
})


module.exports= router;

