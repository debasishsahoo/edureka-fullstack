const Router=require('express').Router()
const userController=require('../controllers/user.controller')
const authGard=require('../middlewares/auth.middleware')

Router.post('/signup',userController.signUp);
Router.post('/signin',userController.signIn);
Router.put('/change-password',authGard,userController.changePassword);
Router.get('/get-user',authGard,userController.getUser);


module.exports=Router;