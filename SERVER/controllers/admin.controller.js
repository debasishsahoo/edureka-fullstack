const mongoose = require("mongoose");
const adminServices = require("../services/admin.services");
const passwordUtility = require("../utils/encryption.util");
const tokenUtility = require("../utils/Token.util");

const adminSignUp = async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    return res.status(400).send({
      message: "Please Provide All Data,name or email or password Messing",
      error: "Bad Request",
    });
  }
  const oldAdmin = await adminServices.getDataByQuery({ email:email });
  if (oldAdmin) {
    return res.status(409).send({
      message: "User Already Exits",
      error: "Conflict",
    });
  }
  const hashedPassword = await passwordUtility.hashPassword(password);
  if (!hashedPassword) {
    return res.status(401).send({
      message: "Password Hashing is Getting Problem",
      error: "Unauthorized",
    });
  }

  const payload = {
    ...req.body,
    password: hashedPassword,
  };
  //console.log('payload:', payload)

  try {
    const newAdmin = await adminServices.insertData(payload);

    return res
      .status(201)
      .send({ message: "success", error: null, data: newAdmin });
  } catch (error) {
    return res.status(500).send({ message: "failure", error: `${error}` });
  }
};

const adminSignIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: "Please Provide All Data, email or password Messing",
      error: "Bad Request",
    });
  }

  const oldAdmin = await adminServices.getDataByQuery({ email:email });
  console.log('oldAdmin:', oldAdmin)
  if (!oldAdmin) {
    return res.status(404).send({
      message: "User Not Found",
      error: "Not Found",
    });
  }
  const checkPassword = await passwordUtility.matchPassword(password,oldAdmin.password);

  if (checkPassword) {
    try {
      const tokenPayload = {
        _id: oldAdmin._id,
        email: oldAdmin.email,
      };


      const token = await tokenUtility.generateToken(tokenPayload);
      const tokenOption = {
        httpOnly: true,
        secure: true,
      };

      const returnData={name:oldAdmin.name,isAdmin:oldAdmin.isAdmin,image:oldAdmin.image}

      return res.cookie("token", token, tokenOption).status(200).send({
        message: "success",
        error: null,
        token:token,
        data: returnData
      });
    } catch (error) {
      return res.status(500).send({ message: "failure", error: `${error}` });
    }
  }else{
    return res.status(401).send({ message: "failure", error: 'Unauthorized Access' });
  }
};

const adminSignOut=async(req, res)=>{
  try{
    res.clearCookie("token")

    return res.status(200).send({
        message : "success",
        error : null,
        data : []
    })
}catch(error){
    return res.status(500).send({
        message: "failure",
        error : error.message || error
    })
}
}


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
  } catch (error) {
    return res
      .status(500)
      .send({ message: "failure", error: error, data: [] });
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
      const updatedOldAdmin = await adminServices.updateDataById(adminId, {
        name,
        email,
        password,
        isAdmin,
      });
      return res
        .status(200)
        .send({ message: "success", error: null, data: updatedOldAdmin });
    } catch (error) {
      return res.status(500).send({
        message: "failure",
        error: "internal server error",
        data: null,
      });
    }
  }
  return res
    .status(400)
    .send({ message: "failure", error: "id is not valid", data: null });
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
      return res
        .status(200)
        .send({ message: "success", error: null, data: deletedAdmin });
    } catch (error) {
      return res.status(500).send({
        message: "failure",
        error: "internal server error",
        data: null,
      });
    }
  }
  return res
    .status(400)
    .send({ message: "failure", error: "id is not valid", data: null });
};

module.exports = {
  adminSignUp,
  adminSignIn,
  adminSignOut,
  getAdmin,
  getAdminById,
  updateAdminById,
  deleteAdminById,
};
