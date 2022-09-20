const expres = require('express')
require ("dotenv/config")
const userRoutes = require("./Routes/User")
const mongoose = require("mongoose")
const cors = require("cors");
const PORT = process.env.PORT || 3001
const app = expres();
// please note for online atlas connectino, special characters
/// like @ are causing errors. 
mongoose.connect(`mongodb+srv://tayyabjan:${process.env.Password}@cluster0.batshjz.mongodb.net/?retryWrites=true&w=majority`,
()=>{
    console.log("Connected");
})
app.use(expres.json())
app.use(cors());

app.use("/api/user/",userRoutes)


app.listen(PORT, ()=> {   console.log(` THe server is started at  ${PORT}`)})