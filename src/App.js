import  React, {useState, useEffect} from 'react';
import './App.css';
import { getAllStudents } from './Client';

function App() {
  // state = {
  //   students: []
  // }
  const [students, setStudents] = useState([]);

  useEffect( () => fetchStudents);

  const fetchStudents = () =>{
    getAllStudents()
    .then(res => res.json()
    .then(students => {
      //console.log(students)
    setStudents({
      students
    });
    
    }));
    
  }     

  //students = this.state

    if (students && students.length){
      return students.map((student, index) => {
        return (
          <div key={index}>
            <h2>student.studentId</h2>
            <p>student.firstName</p>
            <p>student.lastName</p>
            <p>student.email</p>
          </div>
        )
      });
    }

  return (
    
    <h1>No student found</h1>
  )
}

export default App;
