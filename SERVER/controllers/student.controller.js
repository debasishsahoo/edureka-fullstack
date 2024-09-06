const studentServices=require('../services/student.services')

const addStudent=async(req,res)=>{
    const {regId,name,course, section}=req.body;

  try{
      await studentServices.insertData({regId,name,course, section});
      return res.status(200).send({ msg: 'success', error: null });
  }catch(err){
    if (error.keyValue.title === title) {
        return res.status(400).send({ data: 'failure', error: 'duplicate title' });
      }
      return res.status(500).send({ data: 'failure', error: 'Internal server error' });
  }
}

module.export=addStudent;