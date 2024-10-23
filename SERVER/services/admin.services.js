const AdminTable = require("../models/admin.model");

const insertData = async (adminPayload) => {
  const newAdmin = await AdminTable.create(adminPayload);
  return newAdmin;
};

const getAllData = async () => {
  const allAdmin = await AdminTable.find().select("_id name email isAdmin");
  return allAdmin;
};

const getDataById = async (id) => {
  const singleAdmin = await AdminTable.findById(id).select(
    "_id name email isAdmin"
  );
  return singleAdmin;
};

const getDataByQuery = async (query) => {
  const singleAdmin = await AdminTable.findOne(query).select(
    "_id name email isAdmin"
  );
  return singleAdmin;
};

const updateDataById = async (id, UpdatePayload) => {
  const updateAdmin = await AdminTable.findByIdAndUpdate(
    id,
    UpdatePayload,
    {
      new: true,
    }
  );
  return updateAdmin;
};

const deleteDataById = async (id) => {
  const deleteAdmin = await AdminTable.findByIdAndDelete(id);
  return deleteAdmin;
};

module.exports = {
  insertData,
  getAllData,
  getDataById,
  getDataByQuery,
  updateDataById,
  deleteDataById,
};
