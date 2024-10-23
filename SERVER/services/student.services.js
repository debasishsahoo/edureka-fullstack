const StudentTable = require("../models/student/student.model");
const StudentAttendanceTable = require("../models/student/studentAttendance.model");
const StudentFeesTable = require("../models/student/studentFees.model");

const insertData = async (studentPayload) => {
  const insertStudentData = await StudentTable.create(studentPayload);
  return insertStudentData;
};

const getAllData = async () => {
  const allStudents = await StudentTable.find({});
  return allStudents;
};

const getDataById = async (id) => {
  const singleStudent = await StudentTable.findById(id);
  return singleStudent;
};

const getDataByQuery = async (payload) => {
  const Students = await StudentTable.find(payload);
  return Students;

};

const getDataByClassRollSortDesc = async (payload) => {
  const Student = await StudentTable.findOne(payload).sort({roll:-1}).limit(1);
  return Student;
};

const getDataByNameClassRoll = async (param) => {
  const Student = await StudentTable.findOne({
    name: param.name,
    class_name: param.class_name,
    roll: param.roll,
  });
  return Student;
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

const getDataByClassAttendance = async (param) => {
  const Students = await StudentAttendanceTable.findOne({
    date: param.date,
    class_name: param.class_name,
  });
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

const addDataByFees=async(payload)=>{
  const  newFees=await StudentFeesTable.create(payload);
  return newFees;
};

const getAllDataByFees=async()=>{
  const  totalFees=await StudentFeesTable.find({});
  return totalFees;
};

const getDataByFees=async(param)=>{
  const  Fees=await StudentFeesTable.findOne({
    name:param.name,
    class_name:param.class_name,
    roll:param.roll
  });
  return Fees;
};



module.exports = {
  insertData,
  getAllData,
  getDataById,
  getDataByQuery,
  getDataByClassRollSortDesc,
  getDataByNameClassRoll,
  updateDataById,
  deleteDataById,

  addDataByClassAttendance,
  getDataByClassAttendance,
  updateDataByClassAttendance,

  addDataByFees,
  getAllDataByFees,
  getDataByFees
};
