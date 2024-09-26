const router=require('express').Router();
const studentController =require('../controllers/student.controller')



router.get('/',studentController.getStudent); //get All Student
router.get('/:id',studentController.getStudentById); //get Single Student by Id
router.post('/register',studentController.addStudent);// Insert Single new Student Data
router.put('/update/:id',studentController.updateStudentById);  // Update Single old Student Data
router.delete('/delete/:id',studentController.deleteStudentById);  // Delete Single Student Data


router.get('/class/:id',()=>{});
router.get('/class/:id/attendance',()=>{});
router.get('/search/:name/:class/:roll',()=>{});

router.get('/attendance/:class',()=>{});
router.get('/fees/:id',()=>{});


module.exports=router;

