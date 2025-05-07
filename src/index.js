
const express = require ("express");
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require ("./config")

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: false}));

app.set(`view engine`, `ejs`);

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("login");
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.post("/signup", async (req, res) => {

    const data = {
        name: req.body.username,
        password: req.body.password
    }

    const existingUser = await collection.findOne({name: data.name});

    if(existingUser){
        res.send("user already exists. Please try a different name ")
    }else{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds)
        data.password = hashedPassword
        const userdata = await collection.insertMany(data);
        console.log(userdata)
    }


})

app.post("/login", async (req,res) =>{
    const loginData = {
        name: req.body.username,
        password:req.body.password
    }

    const userLogin = await collection.findOne({name: loginData.name})
    const passwordLogin = await bcrypt.compare(req.body.password, userLogin.password)


    if(userLogin && passwordLogin){
        res.redirect("/home")
    }else{
        res.send("User name or password is wrong try again")
    }


})

app.get("/home", async (req,res)=>{
    try{
        const users = await collection.find({}).exec(); // Burada toArray() olmayacak
        console.log(users)
        res.render("home", { users: users });
    }catch(error){
        console.log("Error Fetching users:", error);
        res.send("Error fetching users")
    }
})

const port = 5000
app.listen(port, ()=> {
    console.log(`Server running on Port: ${port}`);
})