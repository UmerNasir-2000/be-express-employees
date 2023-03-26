import express from "express";
import { StatusCodes } from "http-status-codes";
import Employee from "../models/employee.model";

const employeeRouter = express.Router();

employeeRouter.get("/", async (req, res) => {
  const employees = await Employee.find();
  return res.status(StatusCodes.CREATED).json(employees);
});

employeeRouter.post("/", async (req, res) => {
  const employee = await Employee.create(req.body);
  return res.status(StatusCodes.CREATED).json(employee);
});

export default employeeRouter;
