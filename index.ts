"use strict";
import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()


const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
}));

app.get("/", (req, res) => {
    res.json("works perfectly");
});

app.listen(3001, "localhost", () => console.log("App listening on http://localhost:3000"));


