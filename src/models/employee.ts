import mongoose from "mongoose";
import { dbConnectionString } from "../../config";

mongoose
  .connect(dbConnectionString)
  .then(() => {
    console.log("✅ Connected to Mongo DB ✨ ⚡️");
  })
  .catch((e: any) => {
    console.log(e);
    console.log("Failed to establish the connection ❌");
  });

const emplyeeSchema = new mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    doj: { type: Date },
    dob: { type: Date },
    salary: { type: Number },
    title: { type: String },
    department: { type: String },
  },
  { collection: "employee" }
);

module.exports = mongoose.model("employee", emplyeeSchema);
