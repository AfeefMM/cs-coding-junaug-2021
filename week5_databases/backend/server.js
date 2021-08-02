//import the express function
const express = require('express');


const server = express();


//import the model
const UserModel = require('./models/UserModel.js');
const ProductModel = require('./models/ProductModel.js');
//import statement
const mongoose = require('mongoose');

//connection string
const connectionString = "mongodb+srv://admin01:Omega_264@cluster0.matm3.mongodb.net/astro_jul2021?retryWrites=true&w=majority";

const connectionConfig={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(connectionString,connectionConfig)
.then(
    ()=>{
        console.log("DB is connected");
    }
)
.catch(
    ()=>{
        console.log("error occured",dbError);
    }
);
//a method to process a GET HTTP request
//server.get(path,callbackFunction)
//res = post
//req = request/ask
server.get(
    '/home',  
    (req, res) => { 
        res.send("<html><head><title>Home</title></head><body><h1>Welcome Home</h1></body></html>")
    }
);

server.get(
    '/about', 
    (req, res) => { 
        res.send("<html><head><title>About</title></head><body><h1>About Page</h1></body></html>")
    }
);

server.get(
    '/contact', 
    (req, res) => { 
        res.send("<html><head><title>Contact</title></head><body><h1>Contact Us</h1></body></html>")
    }
);

server.get(
    '/terms-and-conditions', 
    (req, res) => { 
        res.send("<html><head><title>Terms-and-conditions</title></head><body><h1>Terms & Conditions</h1></body></html>")
    }
);


server.get('/users', 
    (req, res) => {

        UserModel
        .find()
        .then(
            (dbDocument)=>{
                res.send(dbDocument)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )

    }
)

server.post(
    '/users/create',
    (req,res) => {
        //use the UserModel to create a new document
        UserModel
        .create(
            {
                firstName: "Jam",
                lastName: "Doe",
                email: "jamoe@email.com"
            }
        )
        .then(
            (dbDocument)=>{
                res.send(dbDocument)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        );

    }
);
server.post(
    '/users/produce',
    (req,res) => {
        //use the UserModel to create a new document
        ProductModel
        .create(
            {
                brand: "Apple",
                model: "iPad",
                description: "A wonderful tablet",
                color: "Space Grey",
                origin: "US",
                price: 999,
            }
        )
        .then(
            (dbDocument)=>{
                res.send(dbDocument)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        );

    }
);

//.listen() will connect the server
//to an available port
//server.listen(portNumber,callbackFunction)
server.listen(3001,
    () => {
        console.log('server is running on http://localhost:3001/')
    });

    /*MongoDB url
        mongodb+srv://admin01:Omega_264@cluster0.matm3.mongodb.net/astro_jul2021?retryWrites=true&w=majority
    */