import mongoose from "mongoose";
import app from "./app";
import config from "./config";

// Path: server.ts
async function connectToDatabase() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to database");

        app.listen(config.port, () => {
            console.log(`Appllication app listening on port ${config.port}`)
          })
    } catch (error) {
        console.log('Connected Failed',error);
    }
    }


    connectToDatabase();