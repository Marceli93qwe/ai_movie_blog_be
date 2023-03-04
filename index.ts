"use strict";
import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import {handleError} from "./utils/error";
import {addReviewHandler} from "./lib/addReviewHandler";

dotenv.config()


const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
}));

app.get("/", (req, res) => {
    throw new Error("xdd");
    // res.json("works perfectly");

});


app.use(handleError)

//IT SHOULD add a new review every 24 hours
// setInterval(addReviewHandler, 86 400 000);
addReviewHandler()
app.listen(3001, "localhost", () => console.log("App listening on http://localhost:3000"));



