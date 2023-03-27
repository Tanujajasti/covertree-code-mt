import express from "express";
const employee = require("./../models/employee");

const router = express.Router();

// Create the employee record
router.post("/employee", async (req: any, res: any) => {
  const data = new employee(req.body);
  const result = await data.save();

  if (!result) {
    res.json({
      status: "Failed",
      message: "Not able to add the employee",
      data: result,
    });
  } else {
    res.json({
      status: "Success",
      message: "Employee added successfully",
      data: result,
    });
  }
});

// Get all the employee records
// Can also sent sort key to sort the records i.e., ?sort=salary
router.get("/employee", async (req: any, res: any) => {
  try {
    const sortKey = req.query.sort as String;
    let result = null;
    if (sortKey) {
      result = await employee.find().sort(`-${sortKey}`);
    } else {
      result = await employee.find();
    }
    if (!result) {
      res.json({
        status: "Failed",
        message: "No records found",
      });
    } else {
      res.json({
        status: "Success",
        message: `${result.length} record(s) found`,
        data: result,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

// Filter the data based on the column and value or based on the salary range
// i.e., /employee/filter?column=salary&start=1000000&end=5000000
router.get("/employee/filter", async (req: any, res: any) => {
  try {
    const colName = req.query.column as String;
    let result = null;
    if (colName == "salary" && req.query.start && req.query.end) {
      result = await employee.find({
        salary: { $gte: req.query.start, $lte: req.query.end },
      });
    } else {
      const query: any = {};
      query[req.query.column] = req.query.value;
      result = await employee.find(query);
    }
    if (!result) {
      res.json({
        status: "Failed",
        message: "No records found",
      });
    } else {
      res.json({
        status: "Success",
        message: `${result.length} record(s) found`,
        data: result,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

// Find the record and return based on the record ID
router.get("/employee/:id", async (req: any, res: any) => {
  try {
    const _id = req.params.id;

    const result = await employee.findById(_id);
    if (!result) {
      res.json({
        status: "Failed",
        message: `No records found for the give ID (${_id})`,
      });
    } else {
      res.json({
        status: "Success",
        message: "Match found",
        data: result,
      });
    }
  } catch (e) {
    res.send(e);
  }
});

// Find the record and Update based on the record ID
router.put("/employee/:id", async (req: any, res: any) => {
  try {
    const _id = req.params.id;
    const result = await employee.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!result) {
      res.json({
        status: "Failed",
        message: "Not able to able to update the record",
        data: result,
      });
    } else {
      res.json({
        status: "Success",
        message: "Record updated successfully",
        data: result,
      });
    }
  } catch (e) {
    res.send(e);
  }
});

// Delete the record based on the record ID
router.delete("/employee/:id", async (req: any, res: any) => {
  try {
    const _id = req.params.id;
    const result = await employee.findByIdAndDelete(_id);
    if (!result) {
      res.json({
        status: "Failed",
        message: "No match found",
      });
    } else {
      res.json({
        status: "Success",
        message: "Match found. Record deleted successfully.",
      });
    }
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
