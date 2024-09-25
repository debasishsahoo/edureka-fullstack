const StudentTable = require("../models/student/student.model");
const StudentAttendanceTable = require("../models/student/studentAttendance.model");
const StudentFeesTable = require("../models/student/studentFees.model");
const insertData = async (studentPayload) => {
  const insertStudentData = await StudentTable.create(studentPayload);
  return insertStudentData;
};
const getAllData = async () => {
  const allStudent = await StudentTable.find({}).select("-password");
  return allStudent;
};
const getDataByRegId = async (regId) => {
  const Student = await StudentTable.findById(regId).select("-password");
  return Student;
};

const getDataByClass = async (id) => {
  const Students = await StudentTable.find({ class: id }).select("-password");
  return Students;
};
const getDataByNameClassRoll = async (param) => {
  const Students = await StudentTable.findOne({
    name: param.name,
    class: param.class,
    roll: param.roll,
  }).select("-password");
  return Students;
};

const updateDataById = async (studentId, UpdatePayload) => {
  const updateStudentData = await StudentTable.findByIdAndUpdate(
    studentId,
    UpdatePayload,
    {
      new: true,
    }
  );
  return updateStudentData;
};
const deleteDataById = async (studentId) => {
  const deleteStudentData = await StudentTable.findByIdAndDelete(studentId);
  return deleteStudentData;
};


const getDataByClassAttendance = async (className) => {
  const Students = await StudentAttendanceTable.findOne({
    date: new date().format("YYYY-MM-DD"),
    class: className,
  }).select("-password");
  return Students;
};

const addDataByClassAttendance = async (payload) => {
  const newAttendance = await StudentAttendanceTable.create(payload);
  return newAttendance;
};

const updateDataByClassAttendance = async (attendanceId, UpdatePayload) => {
  const newAttendance = await StudentAttendanceTable.updateOne({
    _id:attendanceId,
    $set:{students:UpdatePayload}
  });
  return newAttendance;
};

module.exports = {
  insertData,
  getAllData,
  getDataByRegId,
  getDataByClass,
  getDataByClassAttendance,
  getDataByNameClassRoll,
  updateDataById,
  deleteDataById,
};
