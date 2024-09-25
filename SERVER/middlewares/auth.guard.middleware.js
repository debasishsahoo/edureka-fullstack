const tokenUtility = require("../utils/Token.util");
const adminServices = require("../services/admin.services");
async function authGuard(req, res, next) {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(401).send({
          message: "failure",
          error: "Unauthorized Access, Please Login with Admin Account",
        });
      }
      const adminId = await tokenUtility.verifyToken(token);
      req.admin = adminServices.getDataById(adminId);
      next();
    } catch (error) {
      res.status(401).send({
        message: "failure, Not Authorized,token Failed",
        data: [],
        error: error.message || error,
      });
    }
  }else{
    res.status(401).send({
        message: "failure, Not Authorized, No token",
      });
  }
}

module.exports=authGuard;