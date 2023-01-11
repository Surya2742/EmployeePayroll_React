import logo from './logo.svg';
import './App.css';
import Register from './pages/Register/Register';
import Homepage from './pages/Home/Homepage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Counter from './component/counter/Counter';
import EditEmployeeDetails from './component/EditEmployee/EditEmployeeDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Homepage/>}/>
          <Route path = "/Registration" element = {<Register/>}/>
          <Route path = "/Counter" element = {<Counter/>}/>
          <Route path = "/user/Edit/:id" element= {<EditEmployeeDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
