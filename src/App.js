import logo from './logo.svg';
import './App.css';
import { getAllStudents } from './Client';
import { Component } from 'react';

// class App extends Component () {
//   render(){
//   getAllStudents().then(res => res.json().then(students => {
//     console.log(students); 
//   }));
//   return <h1>Students Management Application</h1>
// }
// }

function App() {
    getAllStudents().then(res => res.json().then(students => {
    console.log(students); 
  }));

  return (
    <h1>Students Management Application</h1>
  )
}

export default App;
