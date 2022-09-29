import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import {Routes,Route} from 'react-router-dom'
import Login from './component/Login/Login';
import Signup from './component/Signup/signup';
import Coursebody from './component/Coursebody/Coursebody';
import Courselist from './component/Addcourses/Courselist';
import Navbar from './component/Navbar';
import Addnewcourses from './component/Addcourses/Addnewcourses';
function App() {
  return (
   <>
   <Navbar/>
  <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/login" element={ <Login/>}/>
    <Route path="/signup" element={ <Signup/>}/>
    <Route path="/courses" element={<Courselist/>}/>
    <Route path='/course/:name' element={<Coursebody/>}/>
    <Route path='/addcourse' element={<Addnewcourses/>}/>
  </Routes>
   </>
  );
}

export default App;
