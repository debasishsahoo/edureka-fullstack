const studentServices = require("../services/student.services");

const addStudent = async (req, res) => {
  const { regId, name, course, section } = req.body;
  try {
    await studentServices.insertData({ regId, name, course, section });
    return res.status(200).send({ message: "success", error: null });
  } catch (err) {
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

const getStudent=async(req,res)=>{
  return res.status(200).send({ message: 'getStudent', error: null });
};
const getStudentById=async(req,res)=>{
  return res.status(200).send({ message: 'getStudentById', error: null });
};
const updateStudentById=async(req,res)=>{
  return res.status(200).send({ message: 'updateStudentById', error: null });
};
const deleteStudentById=async(req,res)=>{
  return res.status(200).send({ message: 'deleteStudentById', error: null });
};

module.exports = {addStudent,getStudent,getStudentById,updateStudentById,deleteStudentById};
