import express from "express";
import {PORT} from "./config/envConfig.js";
import bodyParser from "body-parser";

const setupAndStartServer = async () =>{
    // create the express object 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(PORT, ()=>{
    console.log(`The server is running at port ${PORT}`);
})
}

setupAndStartServer();
