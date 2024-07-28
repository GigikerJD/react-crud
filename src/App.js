import './App.css';
import Login from "../src/components/Login";
import {Routes, Route} from "react-router-dom";
import { Signup } from './components/Signup';
import { Users } from './components/Users';
import { Welcome } from './components/Welcome';

function App() {


  return(
    <>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </>
  )
}

export default App;