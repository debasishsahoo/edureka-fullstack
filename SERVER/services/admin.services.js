const AdminTable = require("../models/admin.model");

const insertData = async (adminPayload) => {
  const insertAdminData = await AdminTable.create(adminPayload);
  return insertAdminData;
};

const getAllData = async () => {
  const allAdmin = await AdminTable.find().select(
    "_id name email isAdmin  "
  );
  return allAdmin;
};

const getDataById = async (adminId) => {
  const singleAdmin = await AdminTable.findById(adminId).select(
    "_id name email isAdmin"
  );
  return singleAdmin;
};

const updateDataById = async (adminId, UpdatePayload) => {
  const updateAdminData = await AdminTable.findByIdAndUpdate(
    adminId,
    UpdatePayload,
    {
      new: true,
    }
  );
  return updateAdminData;
};

const deleteDataById = async (adminId) => {
  const deleteAdminData = await AdminTable.findByIdAndDelete(adminId);
  return deleteAdminData;
};

const searchByParameter = async () => {};

module.exports = {
  insertData,
  getAllData,
  getDataById,
  updateDataById,
  deleteDataById,
};
