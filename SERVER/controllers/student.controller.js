const mongoose = require("mongoose");
const studentServices = require("../services/student.services");

const addStudent = async (req, res) => {
  let {
    name,
    class_name,
    roll,
    address,
    parent_name,
    contact_no,
    age,
    gender,
    image,
    registration_fees,
    previous_dues,
  } = req.body;

  //console.log("req.body:", req.body);

  if (
    !name ||
    !class_name ||
    !address ||
    !parent_name ||
    !contact_no ||
    !age ||
    !gender ||
    !registration_fees
  ) {
    return res.status(400).send({
      message: "Please Provide All Data",
      error: "Bad Request",
    });
  }

  const oldStudent = await studentServices.getDataByNameClassRoll({
    name: name,
    class_name: class_name,
    roll: roll,
  });

  //console.log("oldStudent:", oldStudent);

  if (oldStudent) {
    return res.status(409).send({
      message: "Student Already Exits",
      error: "Conflict",
    });
  }

  const studentInfo =
    (await studentServices.getDataByClass(class_name)) &&
    (await studentServices.getDataByClassRollSortDesc(class_name));

  console.log("studentInfo:", studentInfo);

  let Roll_No;

  if (studentInfo) {
    Roll_No = studentInfo.roll + 1;
  } else {
    Roll_No = 1;
  }

  console.log("Roll_No:", Roll_No);

  const Registered_By = "Admin"; //Need to Implement Later
  const Student_Name = name.toUpperCase();
  console.log("Student_Name:", Student_Name);

  try {
    const newStudent = await studentServices.insertData({
      registered_by: Registered_By,
      name: Student_Name,
      class_name,
      roll: Roll_No,
      address,
      parent_name,
      contact_no,
      age,
      gender,
      image,
      registration_fees,
      previous_dues,
    });

    return res
      .status(201)
      .send({ message: "success", error: null, data: newStudent });
  } catch (error) {
    return res.status(400).send({ message: "failure", error: error });
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
  } catch (error) {
    return res.status(500).send({ message: "failure", error: error, data: [] });
  }
};
const getStudentById = async (req, res) => {
  const studentId = req.params.id;
  console.log('studentId:', studentId)

  if (mongoose.isValidObjectId(studentId)) {
    try {
      const singleStudent = await studentServices.getDataByRegId(studentId);

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
        .send({ message: "failure", error: error, data: [] });
    }
  }
  return res
    .status(400)
    .send({ message: "failure", error: "id is not valid", data: null });
};

const getStudentByClass = async (req, res) => {
  const className = req.params.id;
  if (className) {
    try {
      const students = await studentServices.getDataByClass(className);

      if (students.length<0) {
        return res.status(404).send({
          message: "No Student found",
          error: null,
          data: [],
        });
      }
      return res
        .status(200)
        .send({ message: "success", error: null, data: students });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "failure", error: error, data: [] });
    }
  }
  return res
    .status(400)
    .send({ message: "failure", error: "Please Provide Class Name", data: null });
};




const updateStudentById = async (req, res) => {
  const studentId = req.params.id;
  if (mongoose.isValidObjectId(studentId)) {
    try {
      let {
        name,
        class_name,
        roll,
        address,
        parent_name,
        contact_no,
        age,
        gender,
        image,
        registration_fees,
        previous_dues,
      } = req.body;
      const oldStudent = await studentServices.getDataByRegId(studentId);
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
          class_name,
          roll,
          address,
          parent_name,
          contact_no,
          age,
          gender,
          image,
          registration_fees,
          previous_dues,
        }
      );
      return res
        .status(200)
        .send({ message: "success", error: null, data: updatedOldStudent });
    } catch (error) {
      return res.status(500).send({
        message: "failure",
        error: error,
        data: null,
      });
    }
  }
  return res
    .status(400)
    .send({ message: "failure", error: "id is not valid", data: null });
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
      return res
        .status(200)
        .send({ message: "success", error: null, data: deletedStudent });
    } catch (error) {
      return res.status(500).send({
        message: "failure",
        error:error,
        data: null,
      });
    }
  }
  return res
    .status(400)
    .send({ message: "failure", error: "id is not valid", data: null });
};




module.exports = {
  addStudent,
  getStudent,
  getStudentById,
  getStudentByClass,
  updateStudentById,
  deleteStudentById,
};
