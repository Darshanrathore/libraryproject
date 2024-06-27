const express=require('express');
const cors=require('cors')
const app=express();
var bodyParser = require("body-parser");

const routes=require("./routes/routes");

require('dotenv').config();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));

app.use('/api/',routes);


app.listen(3000,function(){
    console.log("server is runing on port 3000");
});

