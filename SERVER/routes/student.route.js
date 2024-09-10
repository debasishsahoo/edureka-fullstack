const router=require('express').Router();
const studentController =require('../controllers/student.controller')



router.get('/',studentController.getStudent); //get All Student
router.get('/:id',studentController.getStudentById); //get Single Student by Id
router.post('/',studentController.addStudent);// Insert Single new Student Data
router.put('/:id',studentController.updateStudentById);  // Update Single old Student Data
router.delete('/:id',studentController.deleteStudentById);  // Delete Single Student Data

module.exports=router;

