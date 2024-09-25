const router=require('express').Router();
const adminController =require('../controllers/admin.controller')
const authGuard =require('../middlewares/auth.guard.middleware')



router.get('/',authGuard,adminController.getAdmin); 
router.get('/:id',authGuard,adminController.getAdminById); 
router.post('/signup',adminController.adminSignUp);
router.post('/signin',adminController.adminSignIn);
router.post('/signout',authGuard,adminController.adminSignOut);
router.put('/:id',authGuard,adminController.updateAdminById);  
router.delete('/:id',authGuard,adminController.deleteAdminById); 

module.exports=router;