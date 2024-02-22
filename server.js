import express from "express";
import router from "./routes/index.js";
import connectDatabase from "./database/index.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();


app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 4000;

connectDatabase().then(() => {
    console.log('Database connection is ready.');


    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Database connection failed:', error);
    process.exit(1);
});
