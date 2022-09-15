import React, { Component } from 'react'

export default class AddEmployee extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            phone: '',
            address: '',
            email: '',
            age: '',
        }
        document.title = "Add Employee";
      }
    handleSubmit = (e) => {
        e.preventDefault();
        let { fname, lname, phone, address, email, age } = this.state;

        if(!/^[a-zA-Z]+$/.test(fname)) {
            this.setState({
                fname: ''
            })
            this.props.showAlert('First name should be only alphabets', 'danger');
            return;
        }
        if(!/^[a-zA-Z]+$/.test(lname)) {
            this.setState({
                lname: ''
            })
            this.props.showAlert('Last name should be only alphabets', 'danger');
            return;
        }
        if(!/^[1-9][0-9]{9}$/.test(phone)) {
            this.setState({
                phone: ''
            })
            this.props.showAlert('Phone number should be only numbers and contain 10 digit', 'danger');
            return;
        }
        if(!/^[0-9]+$/.test(age)) {
            this.setState({
                age: ''
            })
            this.props.showAlert('Age should be only numbers', 'danger');
            return;
        }
        let Employee = {
            fname,
            lname,
            phone,
            address,
            email,
            age
        }
        this.props.newEmployee(Employee);
        this.setState({
            fname: '',
            lname: '',
            phone: '',
            address: '',
            email: '',
            age: ''
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
      
  render() {
    return (
        <div className="container">
            <h1 className='text-center mb-5'>Add Employee Details</h1>
            <form className="row g-3" onSubmit={this.handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="validationDefault01" className="form-label">First name</label>
                    <input type="text" className="form-control" name="fname" value={this.state.fname} onChange={this.handleChange} id="validationDefault01" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault02" className="form-label">Last name</label>
                    <input type="text" className="form-control" name="lname" value={this.state.lname} onChange={this.handleChange} id="validationDefault02" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationPhone" className="form-label">Phone No.</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text text-white" id="inputGroupPrepend3">+91</span>
                        <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} id="validationPhone" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.handleChange} id="validationAddress" required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} id="validationEmail" required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationDefaultAge" className="form-label">Age</label>
                    <input type="text" className="form-control" name="age" value={this.state.age} onChange={this.handleChange} id="validationDefaultAge"  aria-describedby="inputGroupPrepend2" required/>
                </div>
                <div className="col-12">
                    <button className="btn btn-success" type="submit">Submit</button>
                </div>
            </form>
        </div>
      )
  }
}
