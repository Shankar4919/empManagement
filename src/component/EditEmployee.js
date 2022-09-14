import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
const cookies = new Cookies();

export default function EditEmployee(props) {
    const Navigate = useNavigate();
    document.title = "Edit Employee Details";
    var {id} = useParams();
    id = parseInt(id);
    let a = props.employees;
    const [fname, setFname] = useState(a[id].fname);
    const [lname, setLname] = useState(a[id].lname);
    const [phone, setPhone] = useState(a[id].phone);
    const [address, setAddress] = useState(a[id].address);
    const [email, setEmail] = useState(a[id].email);
    const [age, setAge] = useState(a[id].age);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!/^[a-zA-Z]+$/.test(fname)) {
            setFname('')
            props.showAlert('First name should be only alphabets', 'danger');
            return;
        }
        if(!/^[a-zA-Z]+$/.test(lname)) {
            setLname("")
            props.showAlert('Last name should be only alphabets', 'danger');
            return;
        }
        if(!/^[1-9][0-9]{9}$/.test(phone)) {
            setPhone("")
            props.showAlert('Phone number should be only numbers and contain 10 digit', 'danger');
            return;
        }
        
        if(!/^[0-9]+$/.test(age)) {
            setAge("")
            props.showAlert('Age should be only numbers', 'danger');
            return;
        }
        if(address.length < 1) {
            setAddress("")
            props.showAlert('Address should not be empty', 'danger');
        }
        let employee = {
            fname,
            lname,
            phone,
            address,
            email,
            age
        }
        editEmployee(id, employee);
    }
    const editEmployee = (id, employee) => {
        let prev = props.employees;
        prev[id] = employee;
        cookies.remove('data', { path: '/' });
        cookies.set('data', prev, { path: '/' });
        props.showAlert('success', 'Employee updated successfully');
        
        Navigate('/display');
      }
    const handleChange = (e) => {
        let { name, value } = e.target;
        if(name === 'fname') {
            setFname(value);
        }
        if(name === 'lname') {
            setLname(value);
        }
        if(name === 'phone') {
            setPhone(value);
        }
        if(name === 'address') {
            setAddress(value);
        }
        if(name === 'email') {
            setEmail(value);
        }
        if(name === 'age') {
            setAge(value);
        }
    }
      
    return (
        <div className="container">
            <h1 className='text-center mb-5'>Edit Employee Details</h1>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="validationDefault01" className="form-label">First name</label>
                    <input type="text" className="form-control" name="fname" value={fname} onChange={handleChange} id="validationDefault01" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault02" className="form-label">Last name</label>
                    <input type="text" className="form-control" name="lname" value={lname} onChange={handleChange} id="validationDefault02" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationPhone" className="form-label">Phone No.</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text text-white" id="inputGroupPrepend3">+91</span>
                        <input type="text" className="form-control" name="phone" value={phone} onChange={handleChange} id="validationPhone" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" value={address} onChange={handleChange} id="validationAddress" required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={email} onChange={handleChange} id="validationEmail" required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationDefaultAge" className="form-label">Age</label>
                    <input type="text" className="form-control" name="age" value={age} onChange={handleChange} id="validationDefaultAge"  aria-describedby="inputGroupPrepend2" required/>
                </div>
                <div className="col-12">
                    <button className="btn btn-success" type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    )
}

