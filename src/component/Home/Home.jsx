import React, { useState, useEffect } from 'react'
import logo from '../../assets/images/logo.png'
import deleteIcon from '../../assets/images/delete.png'
import editIcon from '../../assets/images/edit.png'
import './Home.css'
import axios from 'axios'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { HomeService } from '../../service/HomeService'
import { toast, ToastContainer } from 'react-toastify'

const Home = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [search, setSearch] = useState("")
  const navigate = useNavigate();
  useEffect(() => {
    // axios.get("http://localhost:9090/getEmployee")
    //   .then(Response => { setEmployeeList(Response.data) })
    //   .catch(error => { console.log(error) })
    HomeService().then((result) => {
      toast.success(result.data.message)
      setEmployeeList(result.data)
    }).catch((err) => {
      alert.log(err)
    });
  }, [])

  const deleteHandler = (employee) => {
    axios.delete(`http://localhost:9090/deleteEmployee/${employee.id}`)
      .then((Response) => { toast.success(Response.data.message) })
      .catch((error) => { toast.error(error.data.message) })
  }

  const editHandler = (id) => {
    navigate("/user/Edit/" + id);
    // setEmp({ name: (employee.name), profileImage: (employee.profileImage),
    //    salary: (employee.salary) , gender: (employee.gender), department: (employee.department),
    //     startDate: (employee.startDate) , textBox: (employee.textBox) })
    // axios.put("http://localhost:9090/empEdit",{data : employee})
    // .then(Response=>{console.log("rk",Response.message)})
    // .catch(error=>{console.log(error)})
  }

  return (
    <>
      <header className="header-content header">
        <div className="logo-content">
          <img src={logo} alt="" />
          <div>
            <span className="emp-text">EMPLOYEE</span><br />
            <span className="emp-payroll">PAYROLL</span><br />
          </div>
        </div>
      </header>
      <div className="form-content">
        <form className="container">
          <div className="pageHeader">
            <label className='form-head'>Employee Details</label>
            <input onChange={(e)=> setSearch(e.target.value)} type="text" class="search-field" placeholder="Search …" name="s" title="Search for:" />
            <NavLink exact to="/Registration"><button className="b"> + Add User</button></NavLink>
          </div>
          <br /><br />
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Start Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employeeList.length > 0 && employeeList.filter(val=>{
                  if(search === '') {
                    return val;
                  } else if(val.name.toLowerCase().includes(search.toLowerCase()) || val.department.toLowerCase().includes(search.toLowerCase())) {
                    return val;
                  }
                }).map((employee) => {
                  return (
                    <>
                      <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.department}</td>
                        <td>{employee.salary}</td>
                        <td>{employee.startDate}</td>
                        <td>
                          <button onClick={() => deleteHandler(employee)}><img src={deleteIcon} width="17" height="20" /></button>
                          <Link to={`/user/Edit/${employee.id}`} ><button className='img'><img src={editIcon} width="17" height="20" /></button></Link>
                        </td>
                      </tr>
                    </>
                  );
                })}
                {employeeList.length === 0 &&
                  <tr>
                    <td colSpan={5}>Data not found</td>
                  </tr>
                }
              </tbody>
            </table>
            <ToastContainer autoClose={5000} />
          </div>
        </form>
      </div>
    </>
  )
}
export default Home
