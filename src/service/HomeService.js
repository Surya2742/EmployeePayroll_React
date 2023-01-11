import axios from 'axios'

// function HomeService() {
//     const [list,setlist] = useState([]);
//     (()=>{
//         axios.get("http://localhost:9090/getEmployee")
//         .then(Response=>{setlist(Response.data)})
//         .catch(error=>{console.log(error)})
//     })   
     
//     console.log(list)
// }
// export default HomeService

export const HomeService = () => {
    try {
      const response = axios.get("http://localhost:9090/getEmployee");
      return response;
    } catch (error) {
      return error; 
    }
  };