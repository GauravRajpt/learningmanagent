import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from "react-bootstrap";
import swDev from './swDev';
import {
  Outlet,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/signup/SignUp';


swDev();

function App() {
  return (

   <div>
      <SignUp/>
      <Outlet/>
    </div>
    
     
   
  );
}

export default App;
