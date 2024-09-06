const StudentTable = require("../models/student.model");

const insertData = async (studentPayload) => {
  const insertStudentData = await StudentTable.create(studentPayload);
  return insertStudentData;
};

const getAllData = async () => {
  const allStudent = await StudentTable.find().select(
    "_id regId name course section"
  );
  return allStudent;
};

const getDataById = async (studentId) => {
  const singleStudent = await StudentTable.findById(studentId).select(
    "_id regId name course section"
  );
  return singleStudent;
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

const searchByParameter = async () => {};

module.exports = {
  insertData,
  getAllData,
  getDataById,
  updateDataById,
  deleteDataById,
};
