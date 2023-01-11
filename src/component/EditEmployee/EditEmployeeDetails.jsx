import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png'
import image1 from '../../assets/profile-images/Ellipse 1.png'
import image2 from '../../assets/profile-images/Ellipse -8.png'
import image3 from '../../assets/profile-images/Ellipse -7.png'
import image4 from '../../assets/profile-images/Ellipse -4.png'
import DatePicker from "react-datepicker";
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const EditEmployeeDetails = () => {
    const { id } = useParams()
    const [employee, setEmployee] = useState({ name: "", profileImage: "", salary: 300000, gender: "", department: "", startDate: new Date(), textBox: "" })
    const navigate = useNavigate();
    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = () => {
        axios.get(`http://localhost:9090/singleEmployee/${id}`)
            .then((Response) => {
                console.log(Response.data)
                setEmployee(Response.data)
            })
            .catch((err) => {console.log(err) })
    }

    const submitHandler = () => {
        if (employee.department === "") {
            alert("Please select depart.")
        }
        else {
            axios.put(`http://localhost:9090/empEdit/${id}`, employee)
                .then((Response) => {toast.success((Response.data.message), {position: toast.POSITION.TOP_LEFT})})
                .catch((err) => { toast.error(err.Response.data) })
                resetHandler()
                
            
        }
    }
    const resetHandler = () => {
        setEmployee({ name: "", profileImage: "", salary: 300000, gender: "", department: "", startDate: "", notes: "" })
    }
    
    return (
        <>
            <header className="header-content header">
                <div class="logo-content">
                    <img src={logo} alt="" />
                    <div>
                        <span className="emp-text">EMPLOYEE</span><br />
                        <span className="emp-payroll">PAYROLL</span><br />
                    </div>
                </div>
            </header>
            <div className="form-content">
                <div className="form">
                    <div className="form-head">
                        Employee Payroll Form
                    </div>
                    <div className="row-content">
                        <label className="label text">Name</label>
                        <input onChange={onChangeHandler} value={employee.name} className="input" type="text" name="name" id="Name" required />
                    </div>
                    <div className="row-content">
                        <label className="label text">Profile Image</label>
                        <div class="profile-radio-content">
                            <label className="dp">
                                <input onChange={onChangeHandler} type="radio" name="profileImage" id="image1" checked={employee.profileImage === "profile1"} value="profile1" required/>
                                <img class="profile" id="image1" src={image1} />
                            </label>
                            <label className="dp">
                                <input onChange={onChangeHandler} type="radio" name="profileImage" id="image2" checked={employee.profileImage === "profile2"} value="profile2" />
                                <img class="profile" id="image1" src={image2} />
                            </label>
                            <label className="dp">
                                <input onChange={onChangeHandler} type="radio" name="profileImage" id="image3" checked={employee.profileImage === "profile3"} value="profile3" />
                                <img class="profile" id="image1" src={image3} />
                            </label>
                            <label className="dp">
                                <input onChange={onChangeHandler} type="radio" name="profileImage" id="image4" checked={employee.profileImage === "profile4"} value="profile4" />
                                <img class="profile" id="image1" src={image4} />
                            </label>
                        </div>
                    </div>
                    <div class="row-content">
                        <label className="label text">Gender</label>
                        <div>
                            <input onChange={onChangeHandler} type="radio" id="male" name="gender" checked={employee.gender === "male"} value="male" required />
                            <label>Male</label>
                            <input onChange={onChangeHandler} type="radio" id="female" name="gender" checked={employee.gender === "female"} value="female" />
                            <label>Female</label>
                        </div>
                    </div>
                    <div class="row-content">
                        <label className="label text">Department</label>
                        <div>
                            <input onChange={onChangeHandler} type="radio" id="hr" name="department" checked={employee.department === "HR"} value="HR" required/>
                            <label>HR</label>
                            <input onChange={onChangeHandler} type="radio" id="sales" name="department" checked={employee.department === "Sales"} value="Sales" />
                            <label>Sales</label>
                            <input onChange={onChangeHandler} type="radio" id="finance" name="department" checked={employee.department === "Finance"} value="Finance" />
                            <label>Finance</label>
                            <input onChange={onChangeHandler} type="radio" id="engineer" name="department" checked={employee.department === "Engineer"} value="Engineer" />
                            <label>Engineer</label>
                            <input onChange={onChangeHandler} className="checkbox others" type="radio" id="others" name="department" checked={employee.department === "Others"} value="Others" />
                            <label>Others</label>
                        </div>
                    </div>
                    <div class="row-content">
                        <label className="label text">Choose Your Salary</label>
                        <input onChange={onChangeHandler} className="input" type="range" name="salary" id="salary" min="300000" max="5000000" step="100" required />{employee.salary}

                    </div>
                    <div class="row-content">
                        <label className="label text">Start Date</label>
                        <div>
                        <input onChange={onChangeHandler} type="date" id='startDate' name='startDate' value={employee.startDate}></input>
                        </div>
                    </div>
                    <div class="row-content">
                        <label className="label text">Notes</label>
                        <textarea onChange={onChangeHandler} className="input" id="notes" name="notes" value={employee.notes} required />
                    </div>
                    <div class="submit-reset">
                        <NavLink exact to="/"><button class="cancelButton button" type="cancel" id="cancelButton">Cancel</button></NavLink>
                        <button onClick={submitHandler} class="submitButton button" type="submit" id="submitButton">Update</button>
                        <button onClick={resetHandler} class="resetButton button" id="resetButton">Reset</button>
                    </div>
                    <ToastContainer autoClose={5000}/>
                </div>
            </div>
            
        </>
    )
}
export default EditEmployeeDetails;
