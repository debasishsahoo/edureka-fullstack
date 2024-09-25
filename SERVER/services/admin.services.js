const AdminTable = require("../models/admin.model");

const insertData = async (adminPayload) => {
  const newAdmin = await AdminTable.create(adminPayload);
  return newAdmin;
};


const getAllData = async () => {
  const allAdmin = await AdminTable.find().select(
    "_id name email isAdmin"
  );
  return allAdmin;
};

const getDataById = async (adminId) => {
  const singleAdmin = await AdminTable.findById(adminId).select(
    "_id name email isAdmin"
  );
  return singleAdmin;
};

const getDataByEmail = async (email) => {
  const singleAdmin = await AdminTable.findOne(email);
  return singleAdmin;
};

const updateDataById = async (adminId, UpdatePayload) => {
  const updateAdmin = await AdminTable.findByIdAndUpdate(
    adminId,
    UpdatePayload,
    {
      new: true,
    }
  );
  return updateAdmin;
};

const deleteDataById = async (adminId) => {
  const deleteAdmin = await AdminTable.findByIdAndDelete(adminId);
  return deleteAdmin;
};

module.exports = {
  insertData,
  getAllData,
  getDataById,
  getDataByEmail,
  updateDataById,
  deleteDataById,
};
