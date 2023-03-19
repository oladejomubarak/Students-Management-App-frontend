import  React, {useState, useEffect} from 'react';
import './App.css';
import { getAllStudents } from './Client';
import { 
  Table 
} from 'antd';

function App() {
  // state = {
  //   students: []
  // }
  const [students, setStudents] = useState([]);

  useEffect(() =>{ fetchStudents();}, []);

  const fetchStudents = () =>{
    getAllStudents()
    .then(res => res.json()
    .then(students => {
      //console.log(students)
    setStudents(students);
    }));
    
  }     

  //students = this.state

    if (students && students.length){
     const columns= [
      {
        title: "Student Id",
        dataIndex: "studentId",
        key: "StudentId"
      },
      {
        title: "First Name",
        dataIndex: "firstName",
        key: "firstName"
      },
      {
        title: "Last Name",
        dataIndex: "lastName",
        key: "lastName"
      },
      {
        title: "Email Address",
        dataIndex: "email",
        key: "email"
      },
      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender"
      }
     ];
     return (
      <Table 
      dataSource={students} 
      columns={columns} 
      rowKey= 'studentId' 
      />
     );
    }

  return (
    <h1>No student found</h1>
    // <>
    // {students.length == 0 ? 
    // <h1>No student found</h1>
    // :
    // students.map((student, index) => {
    //   return (
    //     <div key={index}>
    //       <h2>{student.studentId}</h2>
    //       <p>{student.firstName}</p>
    //       <p>{student.lastName}</p>
    //       <p>{student.email}</p>
    //     </div>

    //   )
    // })}
    // </>
  )
}

export default App;
