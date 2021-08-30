const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');        
const { json } = require('body-parser');
const approuter = require ('./Route/router');
const cors =require('cors')

const hostname = 'localhost';
const port = 5000;

const app = express();
app.use(cors())
app.options('*', cors())


app.use(bodyParser.json()); 

app.use('/' , approuter);

mongoose.connect('mongodb://localhost:27017/myapp1',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(client => {
    // starting the server using the listen function
    app.listen(port, hostname, () => {
        console.log(`Server running at 5000`)
        console.log("Connection has been created.....")
    });
}).catch(err => {
    console.log(err);
})