const router=require('express').Router();
const adminController =require('../controllers/admin.controller')



router.get('/',adminController.getAdmin); 
router.get('/:id',adminController.getAdminById); 
router.post('/',adminController.addAdmin);
router.put('/:id',adminController.updateAdminById);  
router.delete('/:id',adminController.deleteAdminById); 

module.exports=router;