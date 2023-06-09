import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { StatusCodes } from "http-status-codes";
import cors from "cors";
import connectDatabase from "./utils/db";
import employeeRouter from "./routes/employee.route";

async function bootstrap() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get("/", (_, res) => {
    res.status(StatusCodes.OK).json({ message: "Zinda hai..." });
  });

  app.use("/api/employee/", employeeRouter);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    connectDatabase();
    console.log(`Server is running on http://localhost:${PORT}/`);
  });
}

bootstrap();
