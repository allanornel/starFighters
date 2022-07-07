import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router.js";
import { errorHandlingMiddleware } from "./middlewares/errorHandlerMiddleware.js";

const port = +process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use(router);
app.use(errorHandlingMiddleware);

app.listen(port, () => {
  console.log("SERVER ON, PORT: " + port);
});
