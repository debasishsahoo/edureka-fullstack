import React,{useState} from 'react'

const Student = () => {
    const [student,setStudent]=useState({
        name:'Srabani',
        study:'FULL STACK',
        age:20,
        isMale:false
    })

    const UpdateStudent1=()=>{
      setStudent(e=>{
        return{...e,name:'Saheli',age:19,isMale:false}
      })
    }

    const UpdateStudent2=()=>{
      setStudent(e=>{
        return{...e,name:'Anit',age:18,isMale:true}
      })
    }

  return (
    <div>
        <p>My Name is {student.name} and i am {student.study} Student</p>
        <p>I am {student.age} years old {(student.isMale)?'👨':'👧'}</p>
        <br/>
        <button onClick={UpdateStudent1}>Update1</button>
        <button onClick={UpdateStudent2}>Update2</button>
    </div>
  )
}

export default Student