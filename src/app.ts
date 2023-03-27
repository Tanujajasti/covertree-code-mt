import express from "express";
import cors from "cors";
const employee = require("./routers/api");

console.log("✅ Compiling & Setting up the server...");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(employee);
app.listen(port, () => {
  console.log(`✅ connection is setup at ${port}`);
});
