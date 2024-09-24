const mongoose = require("mongoose");
const adminServices = require("../services/admin.services");

const addAdmin = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;
  try {
    const newAdmin = await adminServices.insertData({
      name, 
      email, 
      password, 
      isAdmin,
    });
    return res
      .status(200)
      .send({ message: "success", error: null, data: newAdmin });
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
const getAdmin = async (req, res) => {
  try {
    const allAdmin = await adminServices.getAllData();
    if (!allAdmin) {
      return res
        .status(404)
        .send({ message: "No Data Found", error: null, data: [] });
    }
    const adminCount = allAdmin.length;

    return res.status(200).send({
      message: `success, ${adminCount} Data Found`,
      error: null,
      data: allAdmin,
    });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "failure", error: "Internal server error", data: [] });
  }
};
const getAdminById = async (req, res) => {
  const adminId = req.params.id;
  if (mongoose.isValidObjectId(adminId)) {
    try {
      const singleAdmin = await adminServices.getDataById(adminId);

      if (!singleAdmin) {
        return res.status(404).send({
          message: "No Admin found by the id",
          error: null,
          data: [],
        });
      }
      return res
        .status(200)
        .send({ message: "success", error: null, data: singleAdmin });
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

const updateAdminById = async (req, res) => {
  const adminId = req.params.id;
  if (mongoose.isValidObjectId(adminId)) {
    try {
      const { name, course, section } = req.body;
      const oldAdmin = await adminServices.getDataById(adminId);
      if (!oldAdmin) {
        return res.status(400).send({
          message: "failure",
          error: "No old Admin found by the id",
          data: null,
        });
      }
      const updatedOldAdmin = await adminServices.updateDataById(
        adminId,
        {
          name,
          email,
          password,
          isAdmin,
        }
      );
      return res.status(200).send({  message: "success", error: null,data: updatedOldAdmin });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "failure", error: "internal server error", data: null });
    }
  }
  return res.status(400).send({ message: "failure", error: "id is not valid", data: null });
};
const deleteAdminById = async (req, res) => {
  const adminId = req.params.id;

  if (mongoose.isValidObjectId(adminId)) {
    try {
      const deletedAdmin = await adminServices.deleteDataById(adminId);
      if (!deletedAdmin) {
        return res.status(400).send({
          message: "failure",
          error: "No old Admin found by the id",
          data: null,
        });
      }
      return res.status(200).send({  message: "success", error: null,data: deletedAdmin });
    } catch (error) {
      return res
      .status(500)
      .send({ message: "failure", error: "internal server error", data: null });
    }
  }
  return res.status(400).send({ message: "failure", error: "id is not valid", data: null });
};

module.exports = {
  addAdmin,
  getAdmin,
  getAdminById,
  updateAdminById,
  deleteAdminById,
};