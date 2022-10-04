const { Router } = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken")
const router = require("express").Router();

const { regValidation, loginValidation } = require("./Validation")
const User = require("../Models/User");
const res = require("express/lib/response");
const verifytoken = require("./verifytoken")





router.get("/test", (req, res) => {
  res.send("Testing ....");
})

router.get("/register", verifytoken, (req, res) => {
  res.send("You are at user register get method");
})


router.post("/register", verifytoken, async (req, res) => {

  const { error } = await regValidation(req.body);
  if (error) return res.send(error.details[0].message);

  const existuser = await User.findOne({ email: req.body.email })
  if (existuser) return res.status(400).send("Email Already Exists");

  const { name, email, password, address } = req.body;

  // res.send("Data is Correct");
  const salt = await bcryptjs.genSalt(10);
  const hash = await bcryptjs.hash(req.body.password, salt);
  const user = new User({
    name,
    email,
    password: hash,
    address
  })

  // res.send("User Schema Passed after user save")

  try {

    const savedUser = await user.save();

    res.send(savedUser);
  }
  catch (err) {
    res.status(400).send(err)

  }

})

router.post("/login", async (req, res) => {
  //res.send("Please wait we are connecting you soon");
  const user = await User.findOne({ email: req.body.email }) //,password: await bcryptjs.hash(req.body.password, await bcrypt.genSalt(10))})
  if (!user) return res.status(400).send("Invalid Email or Passowrd");
  const validPass = await bcryptjs.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).send("Invalid Email or Password");
  const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);
  console.log(token)
  res.header("auth-token", token).send(token)
})



router.patch("/register", (req, res) => {

})


router.delete("/register", (req, res) => {

})





router.get("/login", (req, res) => {

})





router.patch("/login", (req, res) => {

})


router.delete("/login ", (req, res) => {

})


module.exports = router