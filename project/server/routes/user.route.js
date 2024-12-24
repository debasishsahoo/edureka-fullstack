const Router=require('express').Router()
const userController=require('../controllers/user.controller')

Router.post('/signup',userController.signUp);
Router.post('/signin',userController.signIn);
Router.put('/change-password',userController.changePassword);
Router.get('/get-user',userController.getUser);
Router.put('/update-user',userController.updateUser);

module.exports=Router;