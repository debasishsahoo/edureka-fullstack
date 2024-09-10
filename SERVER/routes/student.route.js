const express=require('express');
const studentControllers =require('../controllers/student.controller')
const router=express.Router();


router.get('/',studentControllers.getStudent); //get All Student
router.get('/:id',studentControllers.getStudentById); //get Single Student by Id
router.post('/',studentControllers.addStudent);// Insert Single new Student Data
router.put('/:id',studentControllers.updateStudentById);  // Update Single old Student Data
router.delete('/:id',studentControllers.deleteStudentById);  // Delete Single Student Data

module.export=router;

