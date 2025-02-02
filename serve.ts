import {initDB} from "./src/db/initDB";

require("dotenv").config();
import startFAQBot from "./src/main";
import connectMongodb from "./src/db/mongodb";


// connect mongodb
connectMongodb()
    .then(() => {
        console.log('MongoDB connected');
        //initDB();
        // run the bot
        startFAQBot();
    })
    .catch(error => console.log("MongoDB connect failed", error));
