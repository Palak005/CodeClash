import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Login from './pages/auth/login/Login.jsx';
import Home from './pages/home/Home.jsx';
import Signup from './pages/auth/signup/Signup.jsx';
import CreateNote from './pages/notes/create/create.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Profile from './users/pages/profile/Profile.jsx';
import UniNavbar from "../src/users/pages/navbar/Navbar.jsx"

function App() {
  return (
    <BrowserRouter>
    <Toaster/>
    {/* <Navbar/> */}
    <UniNavbar/>
    <Routes>
      {/* <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/note'>
        <Route path='create' element={<CreateNote/>}/>
      </Route> */}
      <Route path='/user'>
        <Route path='profile' element={<Profile/>}/>
        <Route path='home' element={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
