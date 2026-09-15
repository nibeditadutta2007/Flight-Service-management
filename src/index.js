import express from "express";
import {PORT} from "./config/envConfig.js";
import bodyParser from "body-parser";
import cityRoutes from "./routes/cityRoutes.js";   

const setupAndStartServer = async () =>{
    // create the express object 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/cities", cityRoutes);   
app.listen(PORT, ()=>{
    console.log(`The server is running at port ${PORT}`);
})
}

setupAndStartServer();

