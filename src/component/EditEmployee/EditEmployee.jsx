// import React, { useEffect, useState } from 'react'
// import Registration from '../RegistrationPage/Registration'
// import axios from 'axios'
// import { useSearchParams } from 'react-router-dom';

// export default function EditEmployee() {
//     const [emp, setEmp] = useState({})  
//     const search = window.location.search;
//     const params = new URLSearchParams(search);
//     const id = params.get('id'); 

//     useEffect(() => {
//         axios.post("http://localhost:9090/singleEmployee?id=" + Number(id))
//           .then(Response => { setEmp(Response.data) })
//           .catch(error => { console.log(error) })
//       }, [])

//       console.log(id)
//     return (
//         <Registration emp={emp} />
//     )
// }
