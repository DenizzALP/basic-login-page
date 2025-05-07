const mongoose = require ("mongoose")
const connect = mongoose.connect("CONNECTIONSTRING")

connect.then(() => {
    console.log("Database connected succesfully")
})
.catch(()=> {
    console.log("Database can't be connected")
})

const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("users", LoginSchema)

module.exports = collection