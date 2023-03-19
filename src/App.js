import  React, {useState, useEffect} from 'react';
import './App.css';
import { getAllStudents } from './Client';
import { 
  Table, Avatar, Spin
} from 'antd';
import Container from './Container';

// const getIndicatorIcon = () => <Icon type='loading' style ={{fontSize: 24}} />

function App() {
  // state = {
  //   students: []
  // }
  const [students, setStudents] = useState([]);
  const [isFetching, setFetch]= useState(false);

  useEffect(() =>{ fetchStudents();}, []);

  const fetchStudents = () =>{
    setFetch(true);
    getAllStudents()
    .then(res => res.json()
    .then(students => {
      //console.log(students)
    setStudents(students);
    setFetch(false);
    }));
    
  } 
  

  //students = this.state
  if(isFetching){
    return(<Container>
      <Spin/>
    </Container>);
  }

    if (students && students.length){
     const columns= [
      {
        title:'',
        key:'avatar',
        render: (text, student) =>(
          <Avatar size='large'>{`${student.firstName.charAt(0).toUpperCase()}
          ${student.lastName.charAt(0).toUpperCase()}`}</Avatar>
        )
      },
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
      <Container>
      <Table 
      dataSource={students} 
      columns={columns}
      pagination={false} 
      rowKey= 'studentId' 
      />
      </Container>
     );
    }

  return (
    <h1>No student found</h1>
  )
}

export default App;
