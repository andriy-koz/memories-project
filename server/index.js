import express from "express";
import bodyParser from "body-parser"; // parse incoming request bodies in a middleware before the handlers, available under the req.body property
import mongoose from "mongoose"; // model data to work with MongoDB: simpler validation, casting and business logic 
import cors from "cors"; // middleware used to enable CORS
import { config } from "dotenv";

import postRoutes from "./routes/posts.js";

const app = express();
config();

// adding a generic JSON and URL-encoded parser as a top-level middleware, which will parse the bodies of all incoming requests
app.use(bodyParser.json({ limit: "30mb", extended: true })); // "extended" option defines the types of incoming values in the body object, when false it only accepts string or arrays
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// enable all CORS requests
app.use(cors());

// create new route
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

// connect to MongoDB 
mongoose.connect(process.env.MONGO_CNN).then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))).catch((error) => console.log(error.message));