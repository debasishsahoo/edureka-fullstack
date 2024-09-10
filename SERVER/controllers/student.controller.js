const mongoose = require("mongoose");
const studentServices = require("../services/student.services");

const addStudent = async (req, res) => {
  const { regId, name, course, section } = req.body;
  try {
    const newStudent = await studentServices.insertData({
      regId,
      name,
      course,
      section,
    });
    return res
      .status(200)
      .send({ message: "success", error: null, data: newStudent });
  } catch (error) {
    if (error.keyValue.title === title) {
      return res
        .status(400)
        .send({ message: "failure", error: "duplicate title" });
    }
    return res
      .status(500)
      .send({ message: "failure", error: "Internal server error" });
  }
};
const getStudent = async (req, res) => {
  try {
    const allStudent = await studentServices.getAllData();
    if (!allStudent) {
      return res
        .status(404)
        .send({ message: "No Data Found", error: null, data: [] });
    }
    const studentCount = allStudent.length;

    return res.status(200).send({
      message: `success, ${studentCount} Data Found`,
      error: null,
      data: allStudent,
    });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "failure", error: "Internal server error", data: [] });
  }
};
const getStudentById = async (req, res) => {
  const studentId = req.params.id;
  if (mongoose.isValidObjectId(studentId)) {
    try {
      const singleStudent = await studentServices.getDataById(studentId);

      if (!singleStudent) {
        return res.status(404).send({
          message: "No Student found by the id",
          error: null,
          data: [],
        });
      }
      return res
        .status(200)
        .send({ message: "success", error: null, data: singleStudent });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "failure", error: "Internal server error", data: [] });
    }
  }
  return res
    .status(400)
    .send({ message: "failure", error: "id is not valid", data: null });
};

const updateStudentById = async (req, res) => {
  const studentId = req.params.id;
  if (mongoose.isValidObjectId(studentId)) {
    try {
      const { name, course, section } = req.body;
      const oldStudent = await studentServices.getDataById(studentId);
      if (!oldStudent) {
        return res.status(400).send({
          message: "failure",
          error: "No old Student found by the id",
          data: null,
        });
      }
      const updatedOldStudent = await studentServices.updateDataById(
        studentId,
        {
          name,
          course,
          section,
        }
      );
      return res.status(200).send({  message: "success", error: null,data: updatedOldStudent });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "failure", error: "internal server error", data: null });
    }
  }
  return res.status(400).send({ message: "failure", error: "id is not valid", data: null });
};
const deleteStudentById = async (req, res) => {
  const studentId = req.params.id;

  if (mongoose.isValidObjectId(studentId)) {
    try {
      const deletedStudent = await studentServices.deleteDataById(studentId);
      if (!deletedStudent) {
        return res.status(400).send({
          message: "failure",
          error: "No old Student found by the id",
          data: null,
        });
      }
      return res.status(200).send({  message: "success", error: null,data: deletedStudent });
    } catch (error) {
      return res
      .status(500)
      .send({ message: "failure", error: "internal server error", data: null });
    }
  }
  return res.status(400).send({ message: "failure", error: "id is not valid", data: null });
};

module.exports = {
  addStudent,
  getStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
