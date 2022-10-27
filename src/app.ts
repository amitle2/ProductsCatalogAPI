import express from "express";
import productsController from "./controllers-layer/products-controller";
import dotenv from "dotenv";
import errorHandler from "./middleware/error-handler";

if(process.env.NODE_ENV === "production") {
    global.config = require("../config.json").production;
}
else {
    global.config = require("../config.json").development;
}
 

dotenv.config();

const server = express();

server.use(express.json());
server.use("/", productsController);
server.use(errorHandler);

server.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`));
