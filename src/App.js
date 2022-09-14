import Alert from './component/Alert';
import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import AddEmployee from './component/AddEmployee';
import DisplayEmployee from './component/DisplayEmployee';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cookies from 'universal-cookie';
import Home from './component/Home';
import EditEmployee from './component/EditEmployee';
 
const cookies = new Cookies();
 

function App() {
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1500)
  }
  
  var c = []
  if(cookies.get('data')){
    c=cookies.get('data')
  }
  else{
    cookies.set('data', [], { path: '/' });
  }
  const [employees, setEmployee] = useState(c);
  const newEmployee = (employee) => {
    let prev = employees;
    prev.push(employee);
    setEmployee(prev);
    cookies.remove('data', { path: '/' });
    cookies.set('data', prev, { path: '/' });
    showAlert('Employee added successfully', 'success');
  }
  const deleteEmployee = (id) => {
    let check = window.confirm('Are you sure you want to delete this Employee?');
    if (check === true) {
      let prev = employees;
      prev.splice(id, 1);
      setEmployee(prev);
      cookies.remove('data', { path: '/' });
      cookies.set('data', prev, { path: '/' });
      showAlert('success', 'Employee deleted successfully');
    } else {
      showAlert('Employee not deleted', 'warning');
    }
  }
  

  return (
    <>
    <Router>
    <Navbar/>
    <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/add" element={<AddEmployee showAlert={showAlert} newEmployee={newEmployee}/>}/>
        <Route path="/display" element={<DisplayEmployee showAlert={showAlert} deleteEmployee={deleteEmployee} employees={employees} />}/>
        <Route path="/edit/:id" element={<EditEmployee employees={employees} showAlert={showAlert} setEmployee={setEmployee}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
