import { Schema, model, ObjectId } from "mongoose";

interface IEmployee {
  name: string;
  email: string;
  age: number;
  status: string;
  color: string;
  designation: string;
  type: String;
}

const employeeSchema = new Schema<IEmployee>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  status: { type: String, required: true },
  color: { type: String, required: true },
  designation: { type: String, required: true },
  type: { type: String, required: true },
});

const Employee = model<IEmployee>("Employee", employeeSchema);

export default Employee;
